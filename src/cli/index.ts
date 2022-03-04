import commonOptions from "./global-options"

export const cli = commonOptions
  .commandDir("./commands", {
    extensions: [process.env.NODE_ENV === "production" ? "js" : "ts"],
    visit: (command) => {
      return command.default
    },
  })
  .demandCommand()
  .strict()
