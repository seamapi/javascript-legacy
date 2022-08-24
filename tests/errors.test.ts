import test from "ava"
import { v4 as uuidv4, validate as validateUUID } from "uuid"
import Seam, {
  SeamActionAttemptError,
  SeamAPIError,
  SeamMalformedInputError,
} from "../src"
import { getServer } from "./fixtures/plugins/get-server-plugin"

test("should throw instances of SeamAPIError", async (t) => {
  const { client } = await getServer()

  try {
    await client.devices.get({ device_id: uuidv4() })
    t.fail()
  } catch (error) {
    t.is(error instanceof SeamAPIError, true)

    t.is((error as SeamAPIError).status, 404)
    t.like((error as SeamAPIError).metadata, {
      type: "device_not_found",
      message: "device not found",
    })
  }
})

test("error has request ID", async (t) => {
  const { client } = await getServer()

  try {
    await client.devices.get({ device_id: uuidv4() })
    t.fail()
  } catch (error) {
    t.is(error instanceof SeamAPIError, true)

    t.true(validateUUID((error as SeamAPIError).requestId))
  }
})

test("should throw on malformed input with details", async (t) => {
  const { client } = await getServer()

  try {
    await client.devices.get({ device_id: "invalid-device-id" })
    t.fail()
  } catch (error) {
    t.is(error instanceof SeamMalformedInputError, true)
    t.snapshot((error as SeamMalformedInputError).validationErrors)
    t.snapshot((error as SeamMalformedInputError).toString())
  }
})

test("constructor throws if no API key is present", (t) => {
  t.throws(() => new Seam())

  process.env.SEAM_API_KEY = "some-api-key"

  t.notThrows(() => new Seam())
})
