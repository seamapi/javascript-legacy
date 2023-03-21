import { CommandModule } from "yargs"
import { GlobalOptions } from "../lib/global-options"
import { CommonDeviceProperties } from "../../types"
import executeCommand from "../lib/execute-command"

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
        "update <id>",
        "update a device",
        (yargs) => {
          return yargs
            .option("id", {
              describe: "the device ID",
              type: "string",
              demandOption: true,
            })
            .option("name", {
              describe: "the device name",
              type: "string",
            })
            .option("properties", {
              describe: "device properties",
            })
            .option("location", {
              describe: "the device location",
            })
            .check((argv) => {
              if (!argv.id) {
                throw new Error("--id is required")
              }
            })
        },
        async (argv) => {
          await executeCommand(
            "devices.update",
            [
              {
                device_id: argv.id,
                name: argv.name,
                properties: argv.properties as Partial<CommonDeviceProperties>,
                location: argv.location as object,
              },
            ],
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
      .command(
        "list_device_providers",
        "list device providers by provider category (optional)",
        (yargs) => {
          return yargs.option("provider-category", {
            describe: "filter by provider category",
            type: "string",
          })
        },
        async (argv) => {
          await executeCommand(
            "devices.listDeviceProviders",
            [{ provider_category: argv.providerCategory }],
            argv
          )
        }
      )
  },
  handler: () => {},
}

export default command
