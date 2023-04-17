import { Axios } from "axios"
import getDeviceType from "./get-device-type"

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

  try {
    const { data } = await axios.post("/internal/scenarios/factories/load", {
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
    })
    console.log({ data })
  } catch (e) {
    // @ts-ignore
    console.log(e.response.data)
    throw new Error(`Failed load minut scenario`)
  }

  const devices = await getDeviceType(axios, "minut_sensor")
  const [device_with_quiet_hours, device_without_quiet_hours] = devices

  return {
    device_with_quiet_hours,
    device_without_quiet_hours,
  }
}

export default addFakeMinutDevices
