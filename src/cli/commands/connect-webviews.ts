import { CommandModule } from "yargs"
import { Provider } from "../../types/models"
import executeCommand from "../lib/execute-command"
import { GlobalOptions } from "../lib/global-options"

const command: CommandModule<GlobalOptions> = {
  command: "connect-webviews",
  aliases: ["connect-webview", "cw"],
  describe: "interact with connect webviews",
  builder: (yargs) => {
    return yargs
      .demandCommand()
      .command(
        "list",
        "list connect webviews",
        () => {},
        async (yargs) => {
          await executeCommand("connectWebviews.list", [], yargs)
        }
      )
      .command(
        "get <id>",
        "get a connect webview",
        (yargs) => {
          return yargs.positional("id", {
            describe: "the connect webview ID",
            demandOption: true,
            type: "string",
          })
        },
        async (argv) => {
          await executeCommand("connectWebviews.get", [argv.id], argv)
        }
      )
      .command(
        "create",
        "create a connect webview",
        (yargs) => {
          return yargs
            .option("accepted-providers", {
              describe: "providers to accept",
              demandOption: true,
              type: "array",
              choices: Object.values(Provider),
              alias: "ap",
            })
            .check((argv) => {
              if (argv["accepted-providers"].length === 0) {
                throw new Error(
                  "You must specify at least one accepted provider"
                )
              }
              return true
            })
        },
        async (argv) => {
          await executeCommand(
            "connectWebviews.create",
            [
              {
                accepted_providers: argv["accepted-providers"] as Provider[],
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
