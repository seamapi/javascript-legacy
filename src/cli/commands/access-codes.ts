import { CommandModule } from "yargs"
import executeCommand from "../lib/execute-command"
import { GlobalOptions } from "../lib/global-options"

const command: CommandModule<GlobalOptions> = {
  command: "access-codes",
  aliases: ["access-code", "ac"],
  describe: "interact with access codes",
  builder: (yargs) => {
    return yargs
      .demandCommand()
      .command(
        "list",
        "list access codes",
        (yargs) => {
          return yargs.option("device-id", {
            describe: "filter by device ID",
            demandOption: true,
            type: "string",
          })
        },
        async (argv) => {
          await executeCommand(
            "accessCodes.list",
            [
              {
                device_id: argv.deviceId,
              },
            ],
            argv
          )
        }
      )
      .command(
        "delete <id>",
        "delete an access code",
        (yargs) => {
          return yargs.positional("id", {
            describe: "the access code ID",
            demandOption: true,
            type: "string",
          })
        },
        async (argv) => {
          await executeCommand(
            "accessCodes.delete",
            [
              {
                access_code_id: argv.id,
              },
            ],
            argv
          )
        }
      )
  },
  handler: () => {},
}

export default command
