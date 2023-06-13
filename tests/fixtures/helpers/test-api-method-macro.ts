import test, { ExecutionContext } from "ava"
import { Get } from "type-fest"
import Seam from "../../../src"
import { OverloadedParameters } from "../../../src/types/overloaded-types"
import { getServer, WorkerPublishedMessage } from "../plugins/get-server-plugin"
import getModelSchemas from "./get-model-schemas"

type OverloadedParametersByPath<Path extends string> = OverloadedParameters<
  Exclude<Get<Seam, Path>, Seam>
>

// Unwrap into union
type ParametersByPath<Path extends string> =
  OverloadedParametersByPath<Path> extends Array<any>
    ? OverloadedParametersByPath<Path>[number]
    : OverloadedParametersByPath<Path>

interface Input<Path extends string> {
  args?:
    | ParametersByPath<Path>
    | ((seed: WorkerPublishedMessage["seed"]) => ParametersByPath<Path>)
  modifiesState?: boolean
  load_devices_from?: ("minut" | "schlage" | "august" | "nest")[]
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
      const { args = [], modifiesState = false, load_devices_from } = input

      const server = await getServer(modifiesState, load_devices_from)

      let func: any = server.client
      for (const funcName of methodPath.split(".")) {
        func = func[funcName as keyof typeof func]

        if (func === undefined) {
          return t.fail(`${methodPath} is not a valid method`)
        }
      }

      const resolvedArgs =
        typeof args === "function" ? (args as any)(server.seed) : args
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
