import { Axios, AxiosResponse } from "axios"
import getDeviceType from "./get-device-type"
import { Device } from "../../../../src"

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

  await axios.post("/internal/scenarios/factories/load", {
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

  const devices: Device<any, "minut">[] = await getDeviceType(
    axios,
    "minut_sensor"
  )
  const [device_with_quiet_hours, device_without_quiet_hours] = devices
  const device_id = device_with_quiet_hours.device_id
  const {
    data: { noise_thresholds },
  } = await axios.post("/noise_sensors/noise_thresholds/list", {
    device_id,
    sync: true,
  })

  const noise_threshold_normal_hours = (noise_thresholds as any[]).find(
    (noise_threshold) => noise_threshold.name === "builtin_normal_hours"
  )

  const noise_threshold_quiet_hours = (noise_thresholds as any[]).find(
    (noise_threshold) => noise_threshold.name === "builtin_quiet_hours"
  )

  return {
    device_with_quiet_hours,
    device_without_quiet_hours,
    noise_threshold_normal_hours,
    noise_threshold_quiet_hours,
  }
}

export default addFakeMinutDevices
