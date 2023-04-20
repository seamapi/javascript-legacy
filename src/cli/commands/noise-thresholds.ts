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
        "create",
        "create a noise threshold",
        (yargs) => {
          return yargs
            .option("device_id", {
              describe: "the device ID",
              type: "string",
              demandOption: true,
            })
            .option("name", {
              describe: "the name of the noise threshold",
              type: "string",
              demandOption: false,
            })
            .option("starts_daily_at", {
              describe: "the time the noise threshold starts",
              type: "string",
              demandOption: true,
            })
            .option("ends_daily_at", {
              describe: "the time the noise threshold ends",
              type: "string",
              demandOption: true,
            })
            .option("noise_threshold_decibels", {
              describe: "the noise threshold in decibels",
              type: "number",
              demandOption: false,
              conflicts: "noise_threshold_nrs",
            })
            .option("noise_threshold_nrs", {
              describe: "the noise threshold in NRS",
              type: "number",
              demandOption: false,
              conflicts: "noise_threshold_decibels",
            })
        },
        async (argv) => {
          await executeCommand(
            "noiseThresholds.create",
            [
              {
                device_id: argv.device_id,
                name: argv.name,
                starts_daily_at: argv.starts_daily_at,
                ends_daily_at: argv.ends_daily_at,
                noise_threshold_decibels: argv.noise_threshold_decibels,
                noise_threshold_nrs: argv.noise_threshold_nrs,
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
