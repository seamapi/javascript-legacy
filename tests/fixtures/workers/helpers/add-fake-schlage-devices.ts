import { Axios } from "axios"
import getDeviceType from "./get-device-type"

interface Config {
  add_unmanaged_devices?: boolean
}

const addFakeSchlageDevices = async (axios: Axios, config: Config = {}) => {
  const { add_unmanaged_devices = false } = config

  await axios.post("/internal/scenarios/factories/load", {
    factory_name: "create_schlage_devices",
    input: {
      num: 1,
    },
    sync: true,
  })

  const [firstDevice] = await getDeviceType(axios, "schlage_lock")

  const {
    data: { access_code },
  } = await axios.post("/access_codes/create", {
    device_id: firstDevice.device_id,
    name: "Sample Code",
    code: "1234",
    sync: true,
  })

  if (add_unmanaged_devices) {
    await axios.patch("/devices/update", {
      device_id: firstDevice.device_id,
      is_managed: false,
    })
  }

  return {
    id1: firstDevice.device_id,
    name1: firstDevice.properties.name,
    connectedAccountId: firstDevice.connected_account_id,
    accessCode: access_code,
  }
}

export default addFakeSchlageDevices
