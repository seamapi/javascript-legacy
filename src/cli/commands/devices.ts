import executeCommand from "../execute-command"
import { YargsWithGlobalOptions } from "../global-options"

export default {
  command: "devices",
  aliases: ["device"],
  describe: "interact with devices",
  builder: (yargs: YargsWithGlobalOptions) => {
    yargs
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
}
