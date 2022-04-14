import Ajv from "ajv"
import schemas from "../../../src/types/models.generated.json"

const getModelSchemas = () => {
  const ajv = new Ajv()

  // Add array definitions so we can use "Type[]" syntax e.g. "AccessCode[]" in
  // tests
  for (const tName of Object.keys(schemas.definitions)) {
    ;(schemas as any).definitions[`${tName}[]`] = {
      items: {
        $ref: `#/definitions/${tName}`,
      },
      type: "array",
    }
  }

  // Allow "{}" to be used for an empty object
  ;(schemas as any).definitions["{}"] = {}

  ajv.addSchema(schemas)
  return ajv
}

export default getModelSchemas
