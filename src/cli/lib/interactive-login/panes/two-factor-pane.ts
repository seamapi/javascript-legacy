import prompts from "prompts"
import { PaneImplementation } from "./types"

const twoFactorPane: PaneImplementation = {
  name: "two_factor_pane",
  getInput: async ({ code_length }) => {
    const { code } = await prompts(
      {
        type: "text",
        name: "code",
        message: "Enter 2FA code",
        validate: (input) => {
          if (input.length !== code_length) {
            return `2FA code must be ${code_length} characters long`
          }
          return true
        },
      },
      {
        onCancel: () => {
          process.exit(1)
        },
      }
    )
    return { code }
  },
}

export default twoFactorPane
