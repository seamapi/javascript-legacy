import executeCommand from "../execute-command"
import { YargsWithGlobalOptions } from "../global-options"

export default {
  command: "workspaces",
  aliases: ["workspace"],
  describe: "interact with workspaces",
  builder: (yargs: YargsWithGlobalOptions) => {
    yargs
      .demandCommand()
      .command(
        "get",
        "get the workspace associated with the current API key",
        () => {},
        async (argv) => {
          await executeCommand("workspaces.get", [], argv)
        }
      )
      .command(
        "list",
        "list workspaces",
        () => {},
        async (argv) => {
          await executeCommand("workspaces.list", [], argv)
        }
      )
      .command(
        "reset-sandbox",
        "reset the sandbox associated with the current API key",
        () => {},
        async (argv) => {
          await executeCommand("workspaces.resetSandbox", [], argv)
        }
      )
  },
}
