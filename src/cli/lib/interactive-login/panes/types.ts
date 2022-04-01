import { AnyPane } from "seamapi-types"

export interface PaneImplementation<PaneName extends AnyPane["name"]> {
  name: PaneName
  getInput: (
    props: Extract<AnyPane, { name: PaneName }>["render_props"]
  ) => Promise<Extract<AnyPane, { name: PaneName }>["submit_props"]>
}
