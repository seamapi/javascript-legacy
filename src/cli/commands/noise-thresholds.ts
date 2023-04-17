import { CommandModule } from "yargs"
import executeCommand from "../lib/execute-command"
import { GlobalOptions } from "../lib/global-options"

const command: CommandModule<GlobalOptions> = {
  command: "noise-thresholds",
  aliases: ["noise-thresholds", "nt"],
  describe: "interact with noise thresholds",
  builder: (yargs) => {
    return yargs.demandCommand().command(
      "list",
      "list noise thresholds",
      (yargs) => {
        return yargs.option("device-id", {
          describe: "filter by device ID",
          demandOption: true,
          type: "string",
        })
      },
      async (argv) => {
        await executeCommand(
          "noiseThresholds.list",
          [
            {
              device_id: argv.deviceId,
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
