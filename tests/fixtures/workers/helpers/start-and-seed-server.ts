import { GenericContainer, Wait } from "testcontainers"
import getPort from "get-port"
import knex from "knex"
import defaultAxios from "axios"
import getTestDatabase from "./get-test-database"
import getTestSvix from "./get-test-svix"
import addFakeSchlageDevices from "./add-fake-schlage-devices"
import addFakeAugustDevices from "./add-fake-august-devices"
import addFakeMinutDevices from "./add-fake-minut-devices"

const SEAM_ADMIN_PASSWORD = "1234"

const startAndSeedServer = async (
  load_devices_from: ("minut" | "schlage" | "august")[] = ["august", "schlage"]
) => {
  const database = await getTestDatabase()
  const svix = await getTestSvix({
    env: {
      SVIX_DB_DSN: database.internalDatabaseUrl,
      SVIX_JWT_SECRET: "somejwtsecret",
      SVIX_QUEUE_TYPE: "memory",
    },
    network: database.network,
  })

  // SERVER_BASE_URL needs to satisfy these two conditions:
  // - The process inside the container can reach itself
  // - Processes on the host can reach the container
  //
  // We can't have separate values for the host and the container,
  // because sometimes the container will generate a URL and pass
  // it back to the host.
  // Instead, we'll generate a random port and make sure that everything
  // is listening to that port, so that localhost:${port} is valid
  // regardless of what context we're in.
  const hostPort = await getPort()
  const serverUrl = `http://localhost:${hostPort}`
  const seamConnectImage =
    process.env.SEAM_CONNECT_IMAGE ?? "ghcr.io/seamapi/seam-connect:latest"

  const server = await new GenericContainer(seamConnectImage)
    .withExposedPorts({
      container: hostPort,
      host: hostPort,
    })
    .withEnvironment({
      DATABASE_URL: database.internalDatabaseUrl,
      POSTGRES_DATABASE: database.databaseName,
      NODE_ENV: "test",
      SERVER_BASE_URL: serverUrl,
      PORT: hostPort.toString(),
      SEAMTEAM_ADMIN_PASSWORD: SEAM_ADMIN_PASSWORD,
      SVIX_ENDPOINT: svix.endpoint,
      SVIX_API_KEY: svix.apiKey,
      ENABLE_UNMANAGED_DEVICES: "true",
      DISABLE_TASKS:
        "update_clerk_jwts,devops_average_worker_time_spent_in_execution_metric",
    })
    .withCommand(["start:for-integration-testing"])
    .withNetwork(database.network)
    .withNetworkAliases("api")
    .withWaitStrategy(Wait.forLogMessage("ready - started server"))
    .start()

  const db = knex(database.externalDatabaseUrl)

  const workspace = await db("seam.workspace")
    .where({ is_sandbox: true })
    .innerJoin(
      "seam.user_workspace",
      "seam.workspace.workspace_id",
      "seam.user_workspace.workspace_id"
    )
    .innerJoin("seam.user", "seam.user_workspace.user_id", "seam.user.user_id")
    .first()

  const axios = defaultAxios.create({
    baseURL: serverUrl,
  })

  const api_key = "seam_sandykey_0000000000000000000sand"

  ;(axios.defaults.headers as any).Authorization = `Bearer ${api_key}`

  const connectWebview = await axios.post("/connect_webviews/create", {
    // TODO: remove filter when minut is ready
    accepted_providers: load_devices_from.filter(
      (provider) => provider !== "minut"
    ),
  })

  const devices: {
    augustLock?: Awaited<ReturnType<typeof addFakeAugustDevices>>
    minut?: Awaited<ReturnType<typeof addFakeMinutDevices>>
    schlageLock?: Awaited<ReturnType<typeof addFakeSchlageDevices>>
  } = {}

  if (load_devices_from.includes("schlage")) {
    devices["schlageLock"] = await addFakeSchlageDevices(axios)
  }

  if (load_devices_from.includes("schlage")) {
    devices["augustLock"] = await addFakeAugustDevices(axios)
  }

  if (load_devices_from.includes("minut")) {
    devices["minut"] = await addFakeMinutDevices(axios)
  }

  return {
    serverUrl,
    externalDatabaseUrl: database.externalDatabaseUrl,
    seamAdminPassword: SEAM_ADMIN_PASSWORD,
    seed: {
      apiKey: api_key,
      workspaceId: workspace.workspace_id,
      connectWebviewId: connectWebview.data.connect_webview.connect_webview_id,
      devices,
    },
    teardownFn: () => server.stop(),
  }
}

export default startAndSeedServer
