throw new Error('The seamapi package has been moved to seam. \n Please refer to the migration guide at https://github.com/seamapi/javascript/releases/tag/v1.0.0')

import { Seam } from "./seam-connect/client"
export default Seam

export * from "./seam-connect/client"
export * from "./webhooks"
export * from "./lib/api-error"
export * from "./types"

export * from "./seam-os/client"
export * as SeamOSRouteTypes from "./seam-os/routes"
