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
        "get",
        "get a device",
        (yargs) => {
          return yargs
            .option("id", {
              describe: "the device ID",
              type: "string",
            })
            .option("name", {
              describe: "the device name",
              type: "string",
            })
            .conflicts("id", "name")
            .check((argv) => {
              if (!argv.id && !argv.name) {
                throw new Error("Either --id or --name is required")
              }
            })
        },
        async (argv) => {
          await executeCommand(
            "devices.get",
            [argv.name ? { name: argv.name } : { device_id: argv.id! }],
            argv
          )
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
          await executeCommand(
            "devices.list",
            [{ connected_account_id: argv.connectedAccountId }],
            argv
          )
        }
      )
      .command(
        "delete",
        "delete a device",
        (yargs) => {
          return yargs.option("id", {
            describe: "the device ID",
            type: "string",
            demandOption: true,
          })
        },
        async (argv) => {
          await executeCommand("devices.delete", [{ device_id: argv.id }], argv)
        }
      )
  },
  handler: () => {},
}

export default command
