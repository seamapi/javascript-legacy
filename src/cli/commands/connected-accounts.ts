import executeCommand from "../execute-command"
import { YargsWithGlobalOptions } from "../global-options"

export default {
  command: "connected-accounts",
  aliases: ["connected-account", "ca"],
  describe: "interact with connected accounts",
  builder: (yargs: YargsWithGlobalOptions) => {
    yargs
      .demandCommand()
      .command(
        "list",
        "list connected accounts",
        () => {},
        async (argv) => {
          await executeCommand("connectedAccounts.list", [], argv)
        }
      )
      .command(
        "get <id>",
        "get a connected account",
        (yargs) => {
          return yargs.positional("id", {
            describe: "the connected account ID",
            demandOption: true,
          })
        },
        async (argv) => {
          await executeCommand("connectedAccounts.get", [argv.id], argv)
        }
      )
  },
}
