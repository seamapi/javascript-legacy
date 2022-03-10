import { getCLI } from "."
import type Y from "yargs"
// todo: replace with yargs/browser.mjs when https://github.com/yargs/yargs/pull/2144 is merged
import { Yargs } from "https://unpkg.com/yargs@16.0.0-alpha.3/browser.mjs"
import EventEmitter from "eventemitter3"
import TypedEmitter from "typed-emitter"
import { getSeamClientOptionsWithDefaults, SeamClientOptions } from "../"

const yargsInstance = Yargs() as ReturnType<typeof Y>

type CLIEvents = {
  data: (data: string) => void
}

class BrowserCLI extends (EventEmitter as unknown as new () => TypedEmitter<CLIEvents>) {
  private instance = getCLI(yargsInstance).scriptName("seam")
  private seamClientOptions: SeamClientOptions

  /**
   * Use the Seam CLI in the browser!
   */
  constructor(apiKeyOrOptions?: string | SeamClientOptions) {
    super()
    this.seamClientOptions = getSeamClientOptionsWithDefaults(apiKeyOrOptions)
    this.setUpShims()
  }

  /**
   * Parse a command line string. Output will be emitted as data events.
   * @param input a given command string
   * @example
   * ```
   * const cli = new BrowserCLI()
   * await cli.parse("seam --help")
   * ```
   */
  async parse(input: string) {
    this.setUpShims()

    const { apiKey } = this.seamClientOptions

    const inputWithKey = input.includes("--api-key")
      ? input
      : `${input} --api-key ${apiKey}`

    const inputWithKeyAndWithoutPrefix = inputWithKey.startsWith("seam ")
      ? inputWithKey.replace("seam ", "")
      : inputWithKey.startsWith("seamapi ")
      ? inputWithKey.replace("seamapi ", "")
      : inputWithKey

    await new Promise<void>((resolve, reject) => {
      // .parseAsync isn't available in v16, so we listen for the ending newline instead
      const onData = (data: string) => {
        if (data === "\n") {
          this.removeListener("data", onData)
          resolve()
        }
      }
      this.on("data", onData)

      this.instance.parse(
        inputWithKeyAndWithoutPrefix,
        (error: Error, _argv: any, output?: string) => {
          if (error) {
            this.removeListener("data", onData)
            return reject(error)
          }

          if (output) {
            this.emit("data", output)
            this.emit("data", "\n")
          }
        }
      )
    })
  }

  /**
   * Set the wrap value of the Yargs instance
   * @param columns number of columns to wrap to
   */
  setWidth(columns: number) {
    this.instance = this.instance.wrap(columns)
  }

  private setUpShims() {
    process.stdout = {} as any
    process.stdout.write = (data: string) => {
      this.emit("data", data)
      return true
    }
  }
}

export default BrowserCLI
