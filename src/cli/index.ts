import type { Argv } from "yargs"
import * as commands from "./commands"
import { getParserWithOptions } from "./lib/global-options"

export const getCLI = (yargs: Argv) => {
  let builder = getParserWithOptions(yargs)

  // We import commands manually instead of using `.commandDir()` so bundling works
  for (const command of Object.values(commands)) {
    builder = builder.command(command.default as any)
  }

  builder = builder
    .demandCommand()
    .strict()
    .usage(
      "Control locks, lights and other internet of things devices with Seam's simple API."
    )

  return builder
}
