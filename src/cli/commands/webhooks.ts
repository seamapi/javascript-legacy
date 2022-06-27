import { CommandModule } from "yargs"
import executeCommand from "../lib/execute-command"
import { GlobalOptions } from "../lib/global-options"

const command: CommandModule<GlobalOptions> = {
  command: "webhooks",
  aliases: ["webhook"],
  describe: "interact with webhooks",
  builder: (yargs) => {
    return yargs
      .demandCommand()
      .command(
        "list",
        "list webhooks",
        (yargs) => yargs,
        async (argv) => {
          await executeCommand("webhooks.list", [], argv)
        }
      )
      .command(
        "get <id>",
        "get a webhook",
        (yargs) => {
          return yargs.positional("id", {
            describe: "the webhook ID",
            demandOption: true,
            type: "string",
          })
        },
        async (argv) => {
          await executeCommand("webhooks.get", [{ webhook_id: argv.id }], argv)
        }
      )
      .command(
        "create <url>",
        "create a webhook",
        (yargs) => {
          return yargs.positional("url", {
            describe: "the webhook URL",
            demandOption: true,
            type: "string",
          })
        },
        async (argv) => {
          await executeCommand("webhooks.create", [{ url: argv.url }], argv)
        }
      )
      .command(
        "delete <id>",
        "delete a webhook",
        (yargs) => {
          return yargs.positional("id", {
            describe: "the webhook ID",
            demandOption: true,
            type: "string",
          })
        },
        async (argv) => {
          await executeCommand(
            "webhooks.delete",
            [{ webhook_id: argv.id }],
            argv
          )
        }
      )
  },
  handler: () => {},
}

export default command
