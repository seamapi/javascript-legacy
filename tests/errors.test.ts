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

test("waiting on an errored action attempt should throw", async (t) => {
  const { client, seed } = await getServer(true)

  const ACCESS_CODE_TO_DUPLICATE = "111111"
  await client.accessCodes.create({
    device_id: seed.devices.augustLock.id1,
    code: ACCESS_CODE_TO_DUPLICATE,
  })

  await t.throwsAsync(
    () =>
      client.accessCodes.create({
        device_id: seed.devices.augustLock.id1,
        code: ACCESS_CODE_TO_DUPLICATE,
      }),
    {
      instanceOf: SeamActionAttemptError,
    }
  )
})

test("constructor throws if empty API key passed", (t) => {
  t.throws(() => new Seam(""))
  t.notThrows(() => new Seam("some-api-key"))
})

test("constructor throws if no API key is present in env", (t) => {
  process.env.SEAM_API_KEY = ""
  t.throws(() => new Seam())
  process.env.SEAM_API_KEY = "some-api-key"
  t.notThrows(() => new Seam())
})
