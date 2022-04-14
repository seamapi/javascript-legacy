import Ajv from "ajv"
import schemas from "../../../src/types/route-responses.generated.json"

const getRouteResponseSchemas = () => {
  const ajv = new Ajv()
  ajv.addSchema(schemas)
  return ajv
}

export default getRouteResponseSchemas
