import { PaneImplementation } from "./types"
import prompts from "prompts"

const searchAndSelectPane: PaneImplementation = {
  name: "search_and_select_pane",
  getInput: async ({ title, options }) => {
    const { selection } = await prompts(
      {
        name: "selection",
        type: "autocomplete",
        message: title,
        choices: options.map((o: any) => ({
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
