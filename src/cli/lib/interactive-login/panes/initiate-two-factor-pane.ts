import prompts from "prompts"
import { TwoFactorOption } from "seamapi-types"
import { PaneImplementation } from "./types"

const formatOption = (option: TwoFactorOption) => {
  switch (option.method) {
    case "otp":
      return `📱 authenticator app`
    case "sms":
      return `📞 text message to ${option.phone_number}`
    case "email":
      return `📧 email to ${option.email_address}`
    default:
      throw new Error("unknown 2FA method")
  }
}

const initiateTwoFactorPane: PaneImplementation<"initiate_two_factor_pane"> = {
  name: "initiate_two_factor_pane",
  getInput: async ({ options }) => {
    const { id } = await prompts(
      {
        type: "select",
        name: "id",
        message: "Select a 2FA option",
        choices: options.map((o) => ({
          title: formatOption(o),
          value: o.id,
        })),
      },
      {
        onCancel: () => {
          process.exit(1)
        },
      }
    )

    return { id }
  },
}

export default initiateTwoFactorPane
