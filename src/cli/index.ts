#!/usr/bin/env node
import commonOptions from "./global-options"

// todo: bash auto-completion

commonOptions
  .commandDir("./commands", {
    extensions: ["ts"],
    visit: (command) => {
      return command.default
    },
  })
  .demandCommand()
  .parse()
