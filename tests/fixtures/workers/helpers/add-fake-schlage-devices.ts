import { Axios } from "axios"
import getDeviceType from "./get-device-type"

const addFakeSchlageDevices = async (axios: Axios) => {
  await axios.post("/internal/scenarios/factories/load", {
    factory_name: "create_schlage_devices",
    input: {
      num: 1,
    },
    sync: true,
  })

  const [firstDevice] = await getDeviceType(axios, "schlage_lock")

  const {
    data: {
      action_attempt: {
        result: { access_code },
      },
    },
  } = await axios.post("/access_codes/create", {
    device_id: firstDevice.device_id,
    name: "Sample Code",
    code: "1234",
    sync: true,
  })

  return {
    id1: firstDevice.device_id,
    name1: firstDevice.properties.name,
    connectedAccountId: firstDevice.connected_account_id,
    accessCode: access_code,
  }
}

export default addFakeSchlageDevices
