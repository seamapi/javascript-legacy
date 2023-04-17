import { Axios, AxiosResponse } from "axios"
import getDeviceType from "./get-device-type"
import { AxiosError } from "axios"

async function retryAxiosCall(
  axios_fn: Promise<AxiosResponse<any, any>>,
  maxRetries: number
) {
  let retryCount = 0

  while (retryCount < maxRetries) {
    try {
      await axios_fn
    } catch (error) {
      console.log(
        `Attempt ${retryCount + 1} failed. Error: ${
          (error as AxiosError).response?.data.error.message
        }`
      )
      retryCount++
    }
  }

  throw new Error(`Failed load Minut scenario`)
}

const addFakeMinutDevices = async (axios: Axios) => {
  const defaultConfig = {
    sound_level_high: {
      value: 60,
      duration_seconds: 600,
      notifications: [],
    },
    sound_level_high_quiet_hours: {
      value: 60,
      duration_seconds: 600,
      notifications: [],
      enabled: true,
      starts_at: "20:00",
      ends_at: "08:00",
    },
  }

  const create_minut_devices = axios.post(
    "/internal/scenarios/factories/load",
    {
      factory_name: "create_minut_devices",
      input: {
        devicesConfig: [
          defaultConfig,
          {
            ...defaultConfig,
            sound_level_high_quiet_hours: {
              ...defaultConfig.sound_level_high_quiet_hours,
              enabled: false,
            },
          },
        ],
      },
      sync: true,
    }
  )

  await retryAxiosCall(create_minut_devices, 5)

  const devices = await getDeviceType(axios, "minut_sensor")
  const [device_with_quiet_hours, device_without_quiet_hours] = devices

  return {
    device_with_quiet_hours,
    device_without_quiet_hours,
  }
}

export default addFakeMinutDevices
