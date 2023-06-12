import { Axios } from "axios"
import getDeviceType from "./get-device-type"

const addFakeNestDevices = async (axios: Axios) => {
  await axios.post("/internal/scenarios/factories/load", {
    factory_name: "create_nest_devices",
    input: {
      num: 1,
    },
    sync: true,
  })

  const [firstDevice] = await getDeviceType(axios, "nest_thermostat")

  const schedule_starts_at = new Date()
  const schedule_ends_at = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)

  const {
    data: { climate_setting_schedule },
  } = await axios.post("/thermostats/climate_setting_schedules/create", {
    device_id: firstDevice.device_id,
    name: "Vacation Setting",
    schedule_starts_at: schedule_starts_at.toUTCString(),
    schedule_ends_at: schedule_ends_at.toUTCString(),
    schedule_type: "time_bound",
    automatic_heating_enabled: true,
    automatic_cooling_enabled: true,
    heating_set_point_fahrenheit: 40,
    cooling_set_point_fahrenheit: 80,
    manual_override_allowed: true,
  })

  return {
    id1: firstDevice.device_id,
    name1: firstDevice.properties.name,
    connectedAccountId: firstDevice.connected_account_id,
    climateSettingSchedule: climate_setting_schedule,
  }
}

export default addFakeNestDevices
