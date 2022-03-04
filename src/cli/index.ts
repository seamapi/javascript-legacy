#!/usr/bin/env node
import commonOptions from "./global-options"

commonOptions
  .commandDir("./commands", {
    extensions: [process.env.NODE_ENV === "production" ? "js" : "ts"],
    visit: (command) => {
      return command.default
    },
  })
  .demandCommand()
  .parse()
