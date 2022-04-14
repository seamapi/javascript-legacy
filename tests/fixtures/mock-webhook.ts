import http from "node:http"
import pEvent from "p-event"

/**
 * Starts a Node.js server that listens for webhook callbacks.
 */
const mockWebhook = async () => {
  const getPort = await import("@ava/get-port")
  const port = await getPort.default()

  const server = http.createServer()

  server.listen(port)

  const waitForCallback = async (
    timeoutMs = 2000
  ): Promise<{ data: Buffer; req: http.IncomingMessage }> => {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(
        () => reject(new Error("Timed out waiting for webhook callback")),
        timeoutMs
      )

      server.on("request", async (req, res) => {
        const buffers = []

        for await (const chunk of req) {
          buffers.push(chunk)
        }

        const data = Buffer.concat(buffers)
        res.writeHead(200)
        res.end("OK")

        clearTimeout(timeout)
        return resolve({ req, data })
      })
    })
  }

  await pEvent(server, "listening")

  return {
    waitForCallback,
    // docker-host is added as an extra mapping to the Docker host IP when starting the Svix container
    endpoint: `http://docker-host:${port}`,
  }
}

export default mockWebhook
