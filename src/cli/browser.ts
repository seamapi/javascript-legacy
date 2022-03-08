import { getCLI } from "."
import type Y from "yargs"
// todo: replace with yargs/browser.mjs when https://github.com/yargs/yargs/pull/2144 is merged
import { Yargs } from "https://unpkg.com/yargs@16.0.0-alpha.3/browser.mjs"
import EventEmitter from "eventemitter3"
import TypedEmitter from "typed-emitter"

const yargsInstance = Yargs() as ReturnType<typeof Y>

type CLIEvents = {
  data: (data: string) => void
}

class BrowserCLI extends (EventEmitter as unknown as new () => TypedEmitter<CLIEvents>) {
  private instance = getCLI(yargsInstance).scriptName("seam")

  constructor(private apiKey?: string) {
    super()
    this.setUpShims()
  }

  async parse(...args: Parameters<typeof yargsInstance.parse>) {
    this.setUpShims()

    const [input] = args
    const inputWithKey = input.includes("--api-key")
      ? input
      : `${input} --api-key ${this.apiKey}`

    await this.instance.parse(inputWithKey, ...(args.slice(1) as any))
  }

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
