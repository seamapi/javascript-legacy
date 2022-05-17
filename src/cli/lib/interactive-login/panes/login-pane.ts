import prompts from "prompts"
import { PaneImplementation } from "./types"

const loginPane: PaneImplementation<"login_pane"> = {
  name: "login_pane",
  getInput: async (props) => {
    let userIdentifier
    if (props.accepted_user_identifiers.length > 1) {
      userIdentifier = (
        await prompts(
          {
            name: "userIdentifier",
            type: "select",
            message: "Select your login identifier type",
            choices: props.accepted_user_identifiers.map(
              (user_identifier: any) => ({
                title: user_identifier,
                value: user_identifier,
              })
            ),
          },
          {
            onCancel: () => {
              process.exit(1)
            },
          }
        )
      ).userIdentifier
    } else {
      userIdentifier = props.accepted_user_identifiers[0]
    }

    const response = await prompts(
      [
        {
          type: "text",
          name: "user_identifier",
          message: `${userIdentifier}`,
        },
        {
          type: "password",
          name: "password",
          message: "Password",
        },
      ],
      {
        onCancel: () => {
          process.exit(1)
        },
      }
    )

    return response
  },
}

export default loginPane
