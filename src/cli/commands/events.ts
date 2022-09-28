import { CommandModule } from "yargs"
import { GlobalOptions } from "../lib/global-options"
import executeCommand from "../lib/execute-command"

const command: CommandModule<GlobalOptions> = {
  command: "events",
  aliases: ["event"],
  describe: "interact with events",
  builder: (yargs) => {
    return yargs.demandCommand().command(
      "get",
      "get an event",
      (yargs) => {
        return yargs
          .option("id", {
            type: "string",
            describe: "id of the event",
          })
          .option("event_type", {
            type: "string",
            describe: "type of the event",
          })
          .option("device_id", {
            type: "string",
            describe: "id of the device",
          })
          .check((argv) => {
            if (!argv.id && !argv.event_type && !argv.device_id) {
              throw new Error(
                "One of --id, --event_type, or --device_id is required"
              )
            }
          })
      },
      async (argv) => {
        await executeCommand(
          "events.get",
          [
            {
              event_id: argv.id,
              event_type: argv.event_type,
              device_id: argv.device_id,
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
