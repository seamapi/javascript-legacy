import waitForDeviceType from "./wait-for-device-type.mjs"

const addFakeSmartThingsDevices = async (axios) => {
  const {
    data: {
      connect_webview: { connect_webview_id },
    },
  } = await axios.post(`/connect_webviews/create`, {
    accepted_providers: ["smartthings"],
  })

  await axios.post("/internal/connect_webviews/login/next", {
    connect_webview_id,
  })
  await axios.post("/internal/connect_webviews/login/next", {
    connect_webview_id,
    submit_args: {
      user_identifier: "jane@example.com",
      password: "1234",
    },
  })

  const [firstDevice] = await waitForDeviceType(axios, "smartthings_lock")

  await axios.post("/access_codes/create", {
    device_id: firstDevice.device_id,
    name: "Sample Code",
    code: "1234",
    sync: true,
  })

  return {
    id1: firstDevice.device_id,
    connectedAccountId: firstDevice.third_party_account_id,
    connectWebviewId: connect_webview_id,
  }
}

export default addFakeSmartThingsDevices
