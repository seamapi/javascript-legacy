import test from "ava"
import { testAPIMethod } from "./fixtures/helpers/test-api-method-macro"

// Noise Thresholds
test.skip(
  testAPIMethod("noiseThresholds.list"),
  {
    args: (seed) => [
      {
        device_id: seed.devices.minut.device_with_quiet_hours.device_id,
      },
    ],
    modifiesState: true,
    load_devices_from: ["minut"],
  },
  "NoiseThresholds[]"
)

test.skip(
  testAPIMethod("noiseThresholds.create"),
  {
    args: (seed) => [
      {
        device_id: seed.devices.minut.device_without_quiet_hours.device_id,
        starts_daily_at: "13:00:00[America/Los_Angeles]",
        ends_daily_at: "14:00:00[America/Los_Angeles]",
        noise_threshold_decibels: 80,
      },
    ],
    modifiesState: true,
    load_devices_from: ["minut"],
  },
  "{}"
)

test.skip(
  testAPIMethod("noiseThresholds.update"),
  {
    args: (seed) => [
      {
        noise_threshold_id:
          seed.devices.minut.noise_threshold_quiet_hours.noise_threshold_id,
        device_id: seed.devices.minut.device_with_quiet_hours.device_id,
        starts_daily_at: "19:00:00[America/Los_Angeles]",
        ends_daily_at: "21:00:00[America/Los_Angeles]",
        noise_threshold_decibels: 80,
      },
    ],
    modifiesState: true,
    load_devices_from: ["minut"],
  },
  "{}"
)

test.skip(
  testAPIMethod("noiseThresholds.delete"),
  {
    args: (seed) => [
      {
        noise_threshold_id:
          seed.devices.minut.noise_threshold_quiet_hours.noise_threshold_id,
        device_id: seed.devices.minut.device_with_quiet_hours.device_id,
      },
    ],
    modifiesState: true,
    load_devices_from: ["minut"],
  },
  "{}"
)

// Workspaces
test(testAPIMethod("workspaces.list"), {}, "Workspace[]")
test(testAPIMethod("workspaces.get"), {}, "Workspace")
test(testAPIMethod("workspaces.resetSandbox"), { modifiesState: true }, "{}")

// Locks
test(testAPIMethod("locks.list"), {}, "LockDevice[]")
test(
  "with connected account ID",
  testAPIMethod("locks.list"),
  {
    args: (seed) => [seed.devices.schlageLock.connectedAccountId],
  },
  "LockDevice[]"
)
test(
  testAPIMethod("locks.get"),
  { args: (seed) => [seed.devices.schlageLock.id1] },
  "LockDevice"
)
test(
  testAPIMethod("locks.lockDoor"),
  {
    args: (seed) => [seed.devices.schlageLock.id1],
    modifiesState: true,
    load_devices_from: ["schlage"],
  },
  "{}"
)
test(
  testAPIMethod("locks.unlockDoor"),
  {
    args: (seed) => [seed.devices.schlageLock.id1],
    modifiesState: true,
    load_devices_from: ["schlage"],
  },
  "{}"
)

// Devices
test(testAPIMethod("devices.list"), {}, "CommonDevice[]")
test(
  "with connected account ID",
  testAPIMethod("devices.list"),
  {
    args: (seed) => [
      { connected_account_id: seed.devices.schlageLock.connectedAccountId },
    ],
  },
  "CommonDevice[]"
)
test(
  "by ID",
  testAPIMethod("devices.get"),
  {
    args: (seed) => [{ device_id: seed.devices.schlageLock.id1 }],
  },
  "CommonDevice"
)
test(
  "by name",
  testAPIMethod("devices.get"),
  {
    args: (seed) => [{ name: seed.devices.schlageLock.name1 }],
  },
  "CommonDevice"
)
test(
  testAPIMethod("devices.update"),
  {
    args: (seed) => [
      {
        device_id: seed.devices.schlageLock.id1,
        name: "New Name",
      },
    ],
    modifiesState: true,
    load_devices_from: ["schlage"],
  },
  "{}"
)
test(
  "delete",
  testAPIMethod("devices.delete"),
  {
    args: (seed) => [{ device_id: seed.devices.schlageLock.id1 }],
    modifiesState: true,
    load_devices_from: ["schlage"],
  },
  "{}"
)
test(
  testAPIMethod("devices.unmanaged.get"),
  {
    args: (seed) => [{ device_id: seed.devices.unmanagedSchlageLock.id1 }],
    load_devices_from: ["schlage"],
  },

  "UnmanagedDevice"
)
test(testAPIMethod("devices.unmanaged.list"), {}, "UnmanagedDevice[]")
test(testAPIMethod("devices.listDeviceProviders"), {}, "DeviceProvider[]")
test(
  "with provider_category",
  testAPIMethod("devices.listDeviceProviders"),
  {
    args: [
      {
        provider_category: "stable",
      },
    ],
  },
  "DeviceProvider[]"
)

// Connect Webviews
test(testAPIMethod("connectWebviews.list"), {}, "ConnectWebview[]")
test(
  testAPIMethod("connectWebviews.get"),
  {
    args: (seed) => [seed.connectWebviewId],
  },
  "ConnectWebview"
)
test(
  testAPIMethod("connectWebviews.create"),
  {
    args: [
      {
        accepted_providers: ["august"],
      },
    ],
    load_devices_from: [],
    modifiesState: true,
  },
  "ConnectWebview"
)
test(
  testAPIMethod("connectWebviews.delete"),
  {
    args: (seed) => [
      {
        connect_webview_id: seed.connectWebviewId,
      },
    ],
    load_devices_from: [],
    modifiesState: true,
  },
  "{}"
)

// Access Codes
test(
  testAPIMethod("accessCodes.list"),
  {
    args: (seed) => [{ device_id: seed.devices.schlageLock.id1 }],
  },
  "AccessCode[]"
)
test(
  testAPIMethod("accessCodes.create"),
  {
    args: (seed) => [
      {
        device_id: seed.devices.schlageLock.id1,
        name: "Created by Ava",
        code: "4321",
      },
    ],
    load_devices_from: ["schlage"],
    modifiesState: true,
  },
  "AccessCode"
)
test(
  testAPIMethod("accessCodes.createMultiple"),
  {
    args: (seed) => [
      {
        device_ids: [seed.devices.schlageLock.id1],
        name: "Created by Ava",
      },
    ],
    load_devices_from: ["schlage"],
    modifiesState: true,
  },
  "AccessCode[]"
)
test(
  "by access code ID",
  testAPIMethod("accessCodes.get"),
  {
    args: (seed) => [
      {
        access_code_id: seed.devices.augustLock.accessCode.access_code_id,
      },
    ],
  },
  "AccessCode"
)
test(
  "by device ID and code",
  testAPIMethod("accessCodes.get"),
  {
    args: (seed) => [
      {
        device_id: seed.devices.augustLock.id1,
        code: seed.devices.augustLock.accessCode.code!,
      },
    ],
  },
  "AccessCode"
)
test(
  "change type to timebound",
  testAPIMethod("accessCodes.update"),
  {
    args: (seed) => [
      {
        access_code_id: seed.devices.schlageLock.accessCode.access_code_id,
        name: "new name",
        starts_at: new Date(),
        ends_at: new Date(Date.now() + 1000 * 60 * 60),
      },
    ],
    load_devices_from: ["schlage"],
    modifiesState: true,
  },
  "ActionAttempt"
)
test(
  "scheduled",
  testAPIMethod("accessCodes.create"),
  {
    args: (seed) => [
      {
        device_id: seed.devices.augustLock.id1,
        name: "Created by Ava",
        code: "4321",
        starts_at: new Date(),
        ends_at: new Date(Date.now() + 1000 * 60 * 60),
      },
    ],
    load_devices_from: ["august"],
    modifiesState: true,
  },
  "AccessCode"
)
test(
  testAPIMethod("accessCodes.update"),
  {
    args: (seed) => [
      {
        access_code_id: seed.devices.schlageLock.accessCode.access_code_id,
        name: "new name",
      },
    ],
    load_devices_from: ["schlage"],
    modifiesState: true,
  },
  "ActionAttempt"
)
test(
  "change type to ongoing",
  testAPIMethod("accessCodes.update"),
  {
    args: (seed) => [
      {
        access_code_id: seed.devices.schlageLock.accessCode.access_code_id,
        type: "ongoing",
      },
    ],
    load_devices_from: ["schlage"],
    modifiesState: true,
  },
  "ActionAttempt"
)
test(testAPIMethod("connectedAccounts.list"), {}, "ConnectedAccount[]")
test(
  "by email",
  testAPIMethod("connectedAccounts.get"),
  {
    args: (seed) => [
      {
        email: "user-4@example.com",
      },
    ],
  },
  "ConnectedAccount"
)
test(
  "by ID",
  testAPIMethod("connectedAccounts.get"),
  {
    args: (seed) => [
      {
        connected_account_id: seed.devices.augustLock.connectedAccountId,
      },
    ],
  },
  "ConnectedAccount"
)
test(
  testAPIMethod("connectedAccounts.delete"),
  {
    args: (seed) => [
      {
        connected_account_id: seed.devices.augustLock.connectedAccountId,
      },
    ],
    load_devices_from: ["august"],
    modifiesState: true,
  },
  "{}"
)

// Thermostats
test(
  testAPIMethod("thermostats.get"),
  {
    args: (seed) => [
      {
        device_id: seed.devices.nest.id1,
      },
    ],
  },
  "AnyDevice"
)
test(
  testAPIMethod("thermostats.list"),
  {
    args: (seed) => [
      {
        connected_account_id: seed.devices.nest.connectedAccountId,
      },
    ],
  },
  "AnyDevice[]"
)
test(
  testAPIMethod("thermostats.update"),
  {
    args: (seed) => [
      {
        device_id: seed.devices.nest.id1,
        default_climate_setting: {
          automatic_heating_enabled: true,
          heating_set_point_celsius: 20,
        },
      },
    ],
    load_devices_from: ["nest"],
    modifiesState: true,
  },
  "{}"
)
test(
  testAPIMethod("thermostats.delete"),
  {
    args: (seed) => [
      {
        device_id: seed.devices.nest.id1,
      },
    ],
    load_devices_from: ["nest"],
    modifiesState: true,
  },
  "{}"
)
test(
  testAPIMethod("thermostats.setFanMode"),
  {
    args: (seed) => [
      {
        device_id: seed.devices.nest.id1,
        fan_mode_setting: "on",
      },
    ],
    load_devices_from: ["nest"],
    modifiesState: true,
  },
  "{}"
)
test(
  testAPIMethod("thermostats.heat"),
  {
    args: (seed) => [
      {
        device_id: seed.devices.nest.id1,
        heating_set_point_fahrenheit: 80,
      },
    ],
    load_devices_from: ["nest"],
    modifiesState: true,
  },
  "{}"
)
test(
  testAPIMethod("thermostats.cool"),
  {
    args: (seed) => [
      {
        device_id: seed.devices.nest.id1,
        cooling_set_point_fahrenheit: 60,
      },
    ],
    load_devices_from: ["nest"],
    modifiesState: true,
  },
  "{}"
)
test(
  testAPIMethod("thermostats.climateSettingSchedules.get"),
  {
    args: (seed) => [
      {
        climate_setting_schedule_id:
          seed.devices.nest.climateSettingSchedule.climate_setting_schedule_id,
      },
    ],
  },
  "ClimateSettingSchedule"
)
test(
  testAPIMethod("thermostats.climateSettingSchedules.create"),
  {
    args: (seed) => [
      {
        device_id: seed.devices.nest.id1,
        name: "Vacation Setting",
        schedule_starts_at: new Date().toUTCString(),
        schedule_ends_at: new Date(
          Date.now() + 1000 * 60 * 60 * 24 * 7
        ).toUTCString(),
        schedule_type: "time_bound",
        automatic_heating_enabled: true,
        automatic_cooling_enabled: true,
        heating_set_point_fahrenheit: 40,
        cooling_set_point_fahrenheit: 80,
        manual_override_allowed: true,
      },
    ],
    load_devices_from: ["nest"],
    modifiesState: true,
  },
  "ClimateSettingSchedule"
)
test(
  testAPIMethod("thermostats.climateSettingSchedules.update"),
  {
    args: (seed) => [
      {
        climate_setting_schedule_id:
          seed.devices.nest.climateSettingSchedule.climate_setting_schedule_id,
        name: "Vacation Setting 2",
      },
    ],
    load_devices_from: ["nest"],
    modifiesState: true,
  },
  "ClimateSettingSchedule"
)
test(
  testAPIMethod("thermostats.climateSettingSchedules.delete"),
  {
    args: (seed) => [
      {
        climate_setting_schedule_id:
          seed.devices.nest.climateSettingSchedule.climate_setting_schedule_id,
      },
    ],
    load_devices_from: ["nest"],
    modifiesState: true,
  },
  "{}"
)

// Client Sessions
test(
  testAPIMethod("clientSessions.create"),
  { modifiesState: true, load_devices_from: [] },
  "ClientSession"
)
test(
  testAPIMethod("clientSessions.getOrCreate"),
  { modifiesState: true, load_devices_from: [] },
  "ClientSession"
)
