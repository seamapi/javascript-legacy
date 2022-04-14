import pRetry from "p-retry"

const waitForDeviceType = (axios, deviceType) => {
  return pRetry(
    async () => {
      const {
        data: { devices },
      } = await axios.get("/devices/list")

      const filteredDevices = devices.filter(
        (d) => d.device_type === deviceType
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
