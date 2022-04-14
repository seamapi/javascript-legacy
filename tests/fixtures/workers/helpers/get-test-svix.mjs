import { GenericContainer } from "testcontainers"
import { internalIpV4 } from "internal-ip"

let container
let apiKey

const getTestSvix = async ({ env, networkName }) => {
  if (!container) {
    container = new GenericContainer("svix/svix-server")
      .withExposedPorts(8071)
      .withNetworkMode(networkName)
      .withNetworkAliases("svix")
      .withCmd(["svix-server"])
      // We add an extra mapping so Svix can call out to proccesses on the host
      .withExtraHosts({
        host: "docker-host",
        ipAddress: await internalIpV4(),
      })

    for (const [key, value] of Object.entries(env)) {
      container = container.withEnv(key, value)
    }

    container = await container.start()

    const { output } = await container.exec(["svix-server", "jwt", "generate"])
    apiKey = output.split("Token (Bearer):")[1].trim()
  }

  return {
    endpoint: `http://svix:8071`,
    apiKey,
  }
}

export default getTestSvix
