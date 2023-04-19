import { CommandModule } from "yargs"
import executeCommand from "../lib/execute-command"
import { GlobalOptions } from "../lib/global-options"

const command: CommandModule<GlobalOptions> = {
  command: "noise-thresholds",
  aliases: ["noise-thresholds", "nt"],
  describe: "interact with noise thresholds",
  builder: (yargs) => {
    return yargs
      .demandCommand()
      .command(
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
      .command(
        "delete",
        "delete a noise threshold",
        (yargs) => {
          return yargs
            .option("device_id", {
              describe: "the device ID",
              type: "string",
              demandOption: true,
            })
            .option("noise_threshold_id", {
              describe: "the noise threshold ID",
              type: "string",
              demandOption: true,
            })
        },
        async (argv) => {
          await executeCommand(
            "noiseThresholds.delete",
            [
              {
                device_id: argv.device_id,
                noise_threshold_id: argv.noise_threshold_id,
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
