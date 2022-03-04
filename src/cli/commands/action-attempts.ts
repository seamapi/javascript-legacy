import executeCommand from "../execute-command"
import { YargsWithGlobalOptions } from "../global-options"

export default {
  command: "action-attempts",
  aliases: ["action-attempt", "aa"],
  describe: "interact with action attempts",
  builder: (yargs: YargsWithGlobalOptions) => {
    yargs.demandCommand().command(
      "get <id>",
      "get an action attempt",
      (yargs) => {
        return yargs.positional("id", {
          describe: "the action attempt ID",
          demandOption: true,
          type: "string",
        })
      },
      async (argv) => {
        await executeCommand("actionAttempts.get", [argv.id], argv)
      }
    )
  },
}