import {
  GenericContainer,
  StartedNetwork,
  StartedTestContainer,
} from "testcontainers"
import { internalIpV4 } from "internal-ip"

let container: StartedTestContainer
let apiKey: string

const getTestSvix = async ({
  env,
  network,
}: {
  env: Record<string, string>
  network: StartedNetwork
}) => {
  if (!container) {
    const internal_ip = await internalIpV4()
    if (!internal_ip) throw new Error("Failed to resolve internal ip address")

    const container = await new GenericContainer("svix/svix-server:v0.58")
      .withExposedPorts(8071)
      .withNetwork(network)
      .withNetworkAliases("svix")
      .withCommand(["svix-server", "--run-migrations"])
      // We add an extra mapping so Svix can call out to processes on the host
      .withExtraHosts([
        {
          host: "docker-host",
          ipAddress: internal_ip,
        },
      ])
      .withEnvironment(env)
      .start()

    const { output } = await container.exec(["svix-server", "jwt", "generate"])
    apiKey = output.split("Token (Bearer):")[1].trim()
  }

  return {
    endpoint: `http://svix:8071`,
    apiKey,
  }
}

export default getTestSvix
