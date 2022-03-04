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
        "get <id>",
        "get a workspace",
        (yargs) => {
          return yargs.positional("id", {
            describe: "the workspace ID",
            demandOption: true,
          })
        },
        async (argv) => {
          await executeCommand("workspaces.get", [argv.id], argv)
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
