import { PaneImplementation } from "./types"
import prompts from "prompts"

const searchAndSelectPane: PaneImplementation<"search_and_select_pane"> = {
  name: "search_and_select_pane",
  getInput: async ({ title, options }) => {
    const { selection } = await prompts(
      {
        name: "selection",
        type: "autocomplete",
        message: title,
        choices: options.map((o) => ({
          title: o.label,
          value: o.value,
        })),
      },
      {
        onCancel: () => {
          process.exit(1)
        },
      }
    )

    return { value: selection }
  },
}

export default searchAndSelectPane
