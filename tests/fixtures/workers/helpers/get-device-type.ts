import { Axios } from "axios"

const getDeviceType = async (axios: Axios, deviceType: string) => {
  const {
    data: { devices },
  } = await axios.get("/devices/list")

  const filteredDevices = devices.filter(
    (d: any) => d.device_type === deviceType
  )

  if (filteredDevices.length > 0) {
    return filteredDevices
  }

  throw new Error(`Failed to find ${deviceType} devices`)
}

export default getDeviceType
