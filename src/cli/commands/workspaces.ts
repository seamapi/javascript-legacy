import { CommandModule } from "yargs"
import executeCommand from "../lib/execute-command"
import { GlobalOptions } from "../lib/global-options"

const command: CommandModule<GlobalOptions> = {
  command: "workspaces",
  aliases: ["workspace"],
  describe: "interact with workspaces",
  builder: (yargs) => {
    return yargs
      .demandCommand()
      .command(
        "get",
        "get the workspace associated with the current API key",
        (yargs) => yargs,
        async (argv) => {
          await executeCommand("workspaces.get", [], argv)
        }
      )
      .command(
        "list",
        "list workspaces",
        (yargs) => yargs,
        async (argv) => {
          await executeCommand("workspaces.list", [], argv)
        }
      )
      .command(
        "reset-sandbox",
        "reset the sandbox associated with the current API key",
        (yargs) => yargs,
        async (argv) => {
          await executeCommand("workspaces.resetSandbox", [], argv)
        }
      )
  },
  handler: () => {},
}

export default command
