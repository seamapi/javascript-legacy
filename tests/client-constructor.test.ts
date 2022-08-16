import test from "ava"
import Seam from "../src"

test("can pass custom Axios options", async (t) => {
  const client = new Seam({
    apiKey: "seam_test_key",
    axiosOptions: {
      headers: {
        "X-Foo": "bar",
      },
    },
  })

  t.like(client.client.defaults.headers, {
    "X-Foo": "bar",
  })
})
