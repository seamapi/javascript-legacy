import test from "ava"
import nock from "nock"
import _ from "lodash"
import sentryTestKit from "sentry-testkit"
import Seam from "../src"
import { version, repository } from "../package.json"
import { getServer } from "./fixtures/plugins/get-server-plugin"

const generateSentryDsn = () =>
  `https://${_.random(10_000)}@${_.random(10_000)}.ingest.sentry.io/${_.random(
    10_000
  )}`

test.serial("doesn't report to Sentry by default", async (t) => {
  const { url, seed } = await getServer()

  process.env.SENTRY_DSN = generateSentryDsn()

  const sentryFake = sentryTestKit()
  sentryFake.initNetworkInterceptor(
    process.env.SENTRY_DSN,
    (baseUrl, handleRequestBody) => {
      nock(baseUrl)
        .persist()
        .post(/.*/)
        .reply(200, (_, requestBody) => {
          handleRequestBody(requestBody as any)
        })
    }
  )

  const client = new Seam({
    apiKey: seed.apiKey,
    endpoint: url,
    axiosOptions: {
      timeout: 1_000,
    },
  })

  const seamApiNock = nock(url)
    .get("/devices/get?device_id=foo")
    .delayConnection(2_000)
    .reply(403)

  await t.throwsAsync(async () => {
    await client.devices.get({ device_id: "foo" })
  })

  t.true(seamApiNock.isDone())

  // Delay for Sentry report
  await new Promise((resolve) => setTimeout(resolve, 1_000))

  // No reports should have been sent
  t.is(sentryFake.testkit.reports().length, 0)
})

test.serial("reports exception to Sentry if enabled", async (t) => {
  const { url, seed } = await getServer()

  process.env.SENTRY_DSN = generateSentryDsn()

  const sentryFake = sentryTestKit()
  sentryFake.initNetworkInterceptor(
    process.env.SENTRY_DSN,
    (baseUrl, handleRequestBody) => {
      nock(baseUrl)
        .persist()
        .post(/.*/)
        .reply(200, (_, requestBody) => {
          handleRequestBody(requestBody as any)
        })
    }
  )

  const client = new Seam({
    apiKey: seed.apiKey,
    endpoint: url,
    shouldReportExceptions: true,
    axiosOptions: {
      timeout: 1_000,
    },
  })

  const seamApiNock = nock(url)
    .get("/devices/get?device_id=foo")
    .delayConnection(2_000)
    .reply(403)

  await t.throwsAsync(async () => {
    await client.devices.get({ device_id: "foo" })
  })

  t.true(seamApiNock.isDone())

  // Delay for Sentry report
  await new Promise((resolve) => setTimeout(resolve, 1_000))

  // Check that exception was reported to Sentry
  // (More than one report seems to get sent when running in CI)
  t.true(sentryFake.testkit.reports().length > 0)
  // (Bad typings on library)
  const report = (
    sentryFake.testkit
      .reports()
      .find((r) => (r.originalReport as string).includes("timeout"))
      ?.originalReport as string
  )
    .split("\n")
    .map((event) => JSON.parse(event))
    .reduce((accum, e) => ({ ...accum, ...e }), {})

  t.like(report.contexts, {
    sdk_info: {
      version,
      repository,
      endpoint: url,
    },
  })

  t.is(report.exception.values[0].value, "timeout of 1000ms exceeded")
})
