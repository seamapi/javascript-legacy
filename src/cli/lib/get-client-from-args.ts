import _ from "lodash"
import { Seam } from "../.."
import { GlobalOptions } from "./global-options"

const getClientFromArgs = (options: GlobalOptions) => {
  return new Seam(
    _.omitBy(
      {
        apiKey: options["api-key"],
        endpoint: options["endpoint"],
        workspaceId: options["workspace-id"],
      },
      _.isUndefined
    )
  )
}

export default getClientFromArgs
