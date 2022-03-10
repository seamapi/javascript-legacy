import { inspect } from "node-inspect-extracted"
import { Get } from "type-fest"
import { paramCase } from "change-case"
import Seam, { SeamAPIError } from "../.."
import { GlobalOptions } from "./global-options"

type ParametersByPath<Path extends string> = Parameters<
  Exclude<Get<Seam, Path>, Seam>
>

const executeCommand = async <MethodPath extends string>(
  methodName: MethodPath,
  args: ParametersByPath<MethodPath>,
  executeArgs: GlobalOptions
) => {
  let spinner = undefined

  const displaySpinner =
    typeof window === "undefined" && !(executeArgs.quiet || executeArgs.json)

  if (displaySpinner) {
    // Dynamic import so we don't bundle this for the browser
    const ora = await import("ora")

    spinner = ora
      .default(
        methodName
          .split(".")
          .map((v) => paramCase(v))
          .join(".")
      )
      .start()
  }

  const seam = new Seam({
    apiKey: executeArgs["api-key"],
    endpoint: executeArgs["endpoint"],
    workspaceId: executeArgs["workspace-id"],
  })

  let method: any = seam
  for (const path of methodName.split(".")) {
    method = method[path]
  }

  try {
    const result = await method(...args)
    spinner?.succeed()

    if (executeArgs.json) {
      process.stdout.write(JSON.stringify(result, null, 2))
    } else {
      process.stdout.write(
        inspect(result, { depth: 2, colors: true, compact: false })
      )
    }

    process.stdout.write("\n")
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
