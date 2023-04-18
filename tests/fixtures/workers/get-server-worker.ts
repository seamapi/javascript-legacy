import { SharedWorker } from "ava/plugin"
import { Except } from "type-fest"
import startAndSeedServer from "./helpers/start-and-seed-server"

let readableServer: Except<
  Awaited<ReturnType<typeof startAndSeedServer>>,
  "teardownFn"
>

const getServer = async (protocol: SharedWorker.Protocol) => {
  for await (const message of protocol.subscribe()) {
    const { data } = message
    const [command, load_devices_from] = (data as string).split(":") as [
      "GET_READABLE_SERVER" | "GET_WRITABLE_SERVER",
      string
    ]

    if (command === "GET_READABLE_SERVER") {
      if (!readableServer) {
        // We don't care about the teardown function for a long running server
        const { teardownFn, ...server } = await startAndSeedServer(
          load_devices_from.split(",") as ("minut" | "schlage" | "august")[]
        )
        readableServer = server
      }

      message.reply(readableServer)
    } else if (command === "GET_WRITABLE_SERVER") {
      const writableServer = await startAndSeedServer(
        load_devices_from.split(",") as ("minut" | "schlage" | "august")[]
      )

      const { teardownFn, ...server } = writableServer

      message.testWorker.teardown(teardownFn)

      message.reply(server)
    }
  }
}

export default getServer
