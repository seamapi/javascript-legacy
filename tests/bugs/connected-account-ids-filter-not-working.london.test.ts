import test from "ava"
import { getLondonTestFixture } from "../fixtures/get-london-test-fixture"

test("connected account ids filter should work", async (t) => {
  const { seam } = await getLondonTestFixture(t)

  await seam.devices.list({
    connected_account_ids: [],
  })
})
