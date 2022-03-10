import { CommandModule } from "yargs"
import executeCommand from "../lib/execute-command"
import { GlobalOptions } from "../lib/global-options"

const command: CommandModule<GlobalOptions> = {
  command: "action-attempts",
  aliases: ["action-attempt", "aa"],
  describe: "interact with action attempts",
  builder: (yargs) => {
    return yargs.demandCommand().command(
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
  handler: () => {},
}

export default command
