import { PaneImplementation } from "./types"
import open from "open"
import { ContinueOutsideCLIError } from "../utils"

const redirectPane: PaneImplementation<"redirect_pane"> = {
  name: "redirect_pane",
  getInput: async (props) => {
    await open(props.redirect_url)

    throw new ContinueOutsideCLIError("You must continue in the browser")
  },
}

export default redirectPane
