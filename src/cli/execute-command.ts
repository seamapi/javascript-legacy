import ora from "ora"
import { paramCase } from "change-case"
import Seam, { SeamAPIError } from ".."

const executeCommand = async (
  methodName: string,
  args: any[],
  executeArgs: { json?: boolean; quiet?: boolean }
) => {
  const displaySpinner = !(executeArgs.quiet || executeArgs.json)

  const spinner = displaySpinner
    ? ora(
        methodName
          .split(".")
          .map((v) => paramCase(v))
          .join(".")
      ).start()
    : undefined

  const seam = new Seam()

  let method: any = seam
  for (const path of methodName.split(".")) {
    method = method[path]
  }

  try {
    const result = await method(...args)
    spinner?.succeed()

    if (executeArgs.json) {
      console.log(JSON.stringify(result, null, 2))
    } else {
      console.log(result)
    }
  } catch (error) {
    let message = "Unknown error"
    if (error instanceof SeamAPIError) {
      message = `${error.name} (HTTP ${error.status}): ${error.message}`
    } else if (error instanceof Error) {
      message = error.message
    }
    spinner?.fail(message)
    process.exit(1)
  }
}

export default executeCommand
