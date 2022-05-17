import { Axios } from "axios"
import waitForDeviceType from "./wait-for-device-type"

const addFakeSchlageDevices = async (axios: Axios) => {
  await axios.post("/internal/scenarios/factories/load", {
    factory_name: "create_schlage_devices",
    input: {
      num: 1,
    },
    sync: true,
  })

  const [firstDevice] = await waitForDeviceType(axios, "schlage_lock")

  await axios.post("/access_codes/create", {
    device_id: firstDevice.device_id,
    name: "Sample Code",
    code: "1234",
    sync: true,
  })

  return {
    id1: firstDevice.device_id,
    name1: firstDevice.properties.name,
    connectedAccountId: firstDevice.third_party_account_id,
  }
}

export default addFakeSchlageDevices
