import test from "ava"
import ms from "ms"
import { SeamWebhook } from "../src"
import mockWebhook from "./fixtures/mock-webhook"
import { getServer } from "./fixtures/plugins/get-server-plugin"

test("webhook payload is correctly verified", async (t) => {
  const { axios, client, seed } = await getServer(true)

  const { endpoint, waitForCallback } = await mockWebhook()

  const webhookCreationResponse = await axios.post("/webhooks/create", {
    url: endpoint,
  })
  const { secret } = webhookCreationResponse.data.webhook

  // Create event
  const [{ req, data }] = await Promise.all([
    waitForCallback(ms("15s")),
    client.accessCodes.create({
      device_id: seed.devices.augustLock.id1,
      code: "4321",
    }),
  ])

  // Throws if bad secret
  t.throws(() =>
    new SeamWebhook("bad-secret").verify(data.toString(), req.headers as any)
  )

  t.notThrows(() =>
    new SeamWebhook(secret).verify(data.toString(), req.headers as any)
  )

  const callback = new SeamWebhook(secret).verify(
    data.toString(),
    req.headers as any
  )

  t.is(callback.event_type, "access_code.created")
  t.is(callback.data.device_id, seed.devices.augustLock.id1)
  // Check types
  t.true(
    callback.event_type === "access_code.created" &&
      typeof callback.data.access_code_id === "string"
  )
})
