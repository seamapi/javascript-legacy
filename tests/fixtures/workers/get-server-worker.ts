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

    if (data === "GET_READABLE_SERVER") {
      if (!readableServer) {
        // We don't care about the teardown function for a long running server
        const { teardownFn, ...server } = await startAndSeedServer()
        readableServer = server
      }

      message.reply(readableServer)
    } else if (data === "GET_WRITABLE_SERVER") {
      const writableServer = await startAndSeedServer()

      const { teardownFn, ...server } = writableServer

      message.testWorker.teardown(teardownFn)

      message.reply(server)
    }
  }
}

export default getServer
