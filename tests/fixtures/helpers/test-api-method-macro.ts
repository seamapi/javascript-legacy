import test, { ExecutionContext } from "ava"
import { Get } from "type-fest"
import Seam from "../../../src"
import { getServer, WorkerPublishedMessage } from "../plugins/get-server-plugin"
import getModelSchemas from "./get-model-schemas"
import getRouteResponseSchemas from "./get-route-response-schemas"

type ParametersByPath<Path extends string> = Parameters<
  Exclude<Get<Seam, Path>, Seam>
>

interface Input<Path extends string> {
  // method: Path
  args?:
    | ParametersByPath<Path>
    | ((seed: WorkerPublishedMessage["seed"]) => ParametersByPath<Path>)
  modifiesState?: boolean
}

// Ava simplifies types so unfortunately we need to wrap the macro
export const testAPIMethod = <MethodPath extends string>(
  methodPath: MethodPath
) =>
  test.macro({
    async exec(
      t: ExecutionContext,
      input: Input<MethodPath>,
      responseTypeName: string
    ) {
      const { args = [], modifiesState = false } = input

      const server = await getServer(modifiesState)

      let func: any = server.client
      for (const funcName of methodPath.split(".")) {
        func = func[funcName as keyof typeof func]

        if (func === undefined) {
          return t.fail(`${methodPath} is not a valid method`)
        }
      }

      const resolvedArgs = Array.isArray(args) ? args : args(server.seed)
      t.log("Arguments:", resolvedArgs)
      const result = await func(...resolvedArgs)

      t.log("Result:", result)

      const schemas = getModelSchemas()

      const validate = schemas.getSchema(`#/definitions/${responseTypeName}`)

      if (!validate) {
        return t.fail(`No schema found for ${responseTypeName}`)
      }

      const validationResult = validate(result)

      if (validate.errors) {
        t.log("Validation errors:", validate.errors)
      }

      t.true(validationResult, "result failed validation against schema")
    },
    title(providedTitle = "", input: Input<MethodPath>, responseTypeName) {
      return `${methodPath}${
        providedTitle.length > 0 ? ` (${providedTitle})` : ""
      }: ${responseTypeName}`.trim()
    },
  })
