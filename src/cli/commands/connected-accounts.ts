import { CommandModule } from "yargs"
import executeCommand from "../lib/execute-command"
import { GlobalOptions } from "../lib/global-options"

const command: CommandModule<GlobalOptions> = {
  command: "connected-accounts",
  aliases: ["connected-account", "ca"],
  describe: "interact with connected accounts",
  builder: (yargs) => {
    return yargs
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
            type: "string",
          })
        },
        async (argv) => {
          await executeCommand("connectedAccounts.get", [argv.id], argv)
        }
      )
  },
  handler: () => {},
}

export default command
