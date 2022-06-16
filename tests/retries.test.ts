import test from "ava"
import { getServer } from "./fixtures/plugins/get-server-plugin"
import nock from "nock"

test.serial("retries if network error", async (t) => {
  const { client, url } = await getServer()

  const scope = nock(url, { allowUnmocked: true })
    .get("/health")
    .once()
    .replyWithError("Network error")

  const { ok } = await client.makeRequest({ url: "/health" })
  t.true(ok)

  t.true(scope.isDone())
})

test.serial("retries failed request", async (t) => {
  const { client, url } = await getServer()

  const scope = nock(url, { allowUnmocked: true })
    .get("/health")
    .once()
    .reply(500, "Internal Server Error")

  const { ok } = await client.makeRequest({ url: "/health" })
  t.true(ok)

  t.true(scope.isDone())
})

test.serial("calls the endpoint a maximum of 3 times", async (t) => {
  const { client, url } = await getServer()

  const scope = nock(url)
    .get("/health")
    .times(3)
    .reply(500, "Internal Server Error")

  await t.throwsAsync(async () => {
    await client.makeRequest({ url: "/health" })
  })

  t.true(scope.isDone())
})
