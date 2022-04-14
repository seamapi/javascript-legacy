import test from "ava"
import { getServer } from "./get-server-plugin"

test("fixture: get-api-server", async (t) => {
  const { axios } = await getServer()

  const response = await axios.get("/health")

  t.is(response.status, 200)
  t.is(response.data.msg, "I’m one with the Force. The Force is with me.")
})
