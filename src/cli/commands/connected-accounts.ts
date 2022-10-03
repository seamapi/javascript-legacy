import { CommandModule } from "yargs"
import executeCommand from "../lib/execute-command"
import { GlobalOptions } from "../lib/global-options"

const command: CommandModule<GlobalOptions> = {
  command: "connected-accounts",
  aliases: ["connected-account", "ca"],
  describe: "interact with connected accounts",
  builder: (yargs) => {
    return yargs
      .demandCommand()
      .command(
        "list",
        "list connected accounts",
        () => {},
        async (argv) => {
          await executeCommand("connectedAccounts.list", [], argv)
        }
      )
      .command(
        "get",
        "get a connected account",
        (yargs) => {
          return yargs
            .option("connected-account-id", {
              describe: "the connected account ID",
              type: "string",
            })
            .option("email", {
              describe: "the email address of the connected account",
              type: "string",
            })
            .conflicts("connected-account-id", "email")
            .check((argv) => {
              if (!argv.connectedAccountId && !argv.email) {
                throw new Error(
                  "Either --connected-account-id or --email is required"
                )
              }
            })
        },
        async (argv) => {
          await executeCommand(
            "connectedAccounts.get",
            [
              {
                connected_account_id: argv.connectedAccountId,
                email: argv.email,
              },
            ],
            argv
          )
        }
      )
      .command(
        "delete",
        "delete a connected account",
        (yargs) => {
          return yargs
            .option("connected-account-id", {
              describe: "the connected account ID",
              type: "string",
            })
            .option("email", {
              describe: "the email address of the connected account",
              type: "string",
            })
            .conflicts("connected-account-id", "email")
            .check((argv) => {
              if (!argv.connectedAccountId && !argv.email) {
                throw new Error(
                  "Either --connected-account-id or --email is required"
                )
              }
            })
        },
        async (argv) => {
          await executeCommand(
            "connectedAccounts.delete",
            [
              {
                connected_account_id: argv.connectedAccountId,
                email: argv.email,
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
