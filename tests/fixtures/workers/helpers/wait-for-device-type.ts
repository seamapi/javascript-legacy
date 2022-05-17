import { Axios } from "axios"
import pRetry from "p-retry"

const waitForDeviceType = (axios: Axios, deviceType: string) => {
  return pRetry(
    async () => {
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
    },
    { maxRetryTime: 10_000 }
  )
}

export default waitForDeviceType
