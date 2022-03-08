import { CommandModule } from "yargs"
import executeCommand from "../lib/execute-command"
import { GlobalOptions } from "../lib/global-options"

const command: CommandModule<GlobalOptions> = {
  command: "devices",
  aliases: ["device"],
  describe: "interact with devices",
  builder: (yargs) => {
    return yargs
      .demandCommand()
      .command(
        "get <id>",
        "get a device",
        (yargs) => {
          return yargs.positional("id", {
            describe: "the device ID",
            demandOption: true,
            type: "string",
          })
        },
        async (argv) => {
          await executeCommand("devices.get", [argv.id], argv)
        }
      )
      .command(
        "list",
        "list devices",
        (yargs) => {
          return yargs.option("connected-account-id", {
            describe: "filter by connected account ID",
            type: "string",
            alias: "ca",
          })
        },
        async (argv) => {
          await executeCommand("devices.list", [argv.connectedAccountId], argv)
        }
      )
  },
  handler: () => {},
}

export default command
