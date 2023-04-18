import test from "ava"
import { testAPIMethod } from "./fixtures/helpers/test-api-method-macro"

// Noise Thresholds
test.serial(
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

// Workspaces
test.serial(testAPIMethod("workspaces.list"), {}, "Workspace[]")
test.serial(testAPIMethod("workspaces.get"), {}, "Workspace")
test.serial(
  testAPIMethod("workspaces.resetSandbox"),
  { modifiesState: true },
  "{}"
)

// Locks
test.serial(testAPIMethod("locks.list"), {}, "LockDevice[]")
test.serial(
  "with connected account ID",
  testAPIMethod("locks.list"),
  {
    args: (seed) => [seed.devices.schlageLock.connectedAccountId],
  },
  "LockDevice[]"
)
test.serial(
  testAPIMethod("locks.get"),
  { args: (seed) => [seed.devices.schlageLock.id1] },
  "LockDevice"
)
test.serial(
  testAPIMethod("locks.lockDoor"),
  {
    args: (seed) => [seed.devices.schlageLock.id1],
    modifiesState: true,
  },
  "{}"
)
test.serial(
  testAPIMethod("locks.unlockDoor"),
  {
    args: (seed) => [seed.devices.schlageLock.id1],
    modifiesState: true,
  },
  "{}"
)

// Devices
test.serial(testAPIMethod("devices.list"), {}, "AnyDevice[]")
test.serial(
  "with connected account ID",
  testAPIMethod("devices.list"),
  {
    args: (seed) => [
      { connected_account_id: seed.devices.schlageLock.connectedAccountId },
    ],
  },
  "AnyDevice[]"
)
test.serial(
  "by ID",
  testAPIMethod("devices.get"),
  {
    args: (seed) => [{ device_id: seed.devices.schlageLock.id1 }],
  },
  "AnyDevice"
)
test.serial(
  "by name",
  testAPIMethod("devices.get"),
  {
    args: (seed) => [{ name: seed.devices.schlageLock.name1 }],
  },
  "AnyDevice"
)
test.serial(
  testAPIMethod("devices.update"),
  {
    args: (seed) => [
      {
        device_id: seed.devices.schlageLock.id1,
        name: "New Name",
      },
    ],
    modifiesState: true,
  },
  "{}"
)
test.serial(
  "delete",
  testAPIMethod("devices.delete"),
  {
    args: (seed) => [{ device_id: seed.devices.schlageLock.id1 }],
    modifiesState: true,
  },
  "{}"
)
test.serial(testAPIMethod("devices.unmanaged.list"), {}, "UnmanagedDevice[]")
test.serial(
  testAPIMethod("devices.listDeviceProviders"),
  {},
  "DeviceProvider[]"
)
test.serial(
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
test.serial(testAPIMethod("connectWebviews.list"), {}, "ConnectWebview[]")
test.serial(
  testAPIMethod("connectWebviews.get"),
  {
    args: (seed) => [seed.connectWebviewId],
  },
  "ConnectWebview"
)
test.serial(
  testAPIMethod("connectWebviews.create"),
  {
    args: [
      {
        accepted_providers: ["august"],
      },
    ],
    modifiesState: true,
  },
  "ConnectWebview"
)
test.serial(
  testAPIMethod("connectWebviews.delete"),
  {
    args: (seed) => [
      {
        connect_webview_id: seed.connectWebviewId,
      },
    ],
    modifiesState: true,
  },
  "{}"
)

// Access Codes
test.serial(
  testAPIMethod("accessCodes.list"),
  {
    args: (seed) => [{ device_id: seed.devices.schlageLock.id1 }],
  },
  "AccessCode[]"
)
test.serial(
  testAPIMethod("accessCodes.create"),
  {
    args: (seed) => [
      {
        device_id: seed.devices.schlageLock.id1,
        name: "Created by Ava",
        code: "4321",
      },
    ],
    modifiesState: true,
  },
  "AccessCode"
)
test.serial(
  testAPIMethod("accessCodes.createMultiple"),
  {
    args: (seed) => [
      {
        device_ids: [seed.devices.schlageLock.id1],
        name: "Created by Ava",
      },
    ],
    modifiesState: true,
  },
  "AccessCode[]"
)
test.serial(
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
test.serial(
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
test.serial(
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
    modifiesState: true,
  },
  "TimeBoundAccessCode"
)
test.serial(
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
    modifiesState: true,
  },
  "AccessCode"
)
test.serial(
  testAPIMethod("accessCodes.update"),
  {
    args: (seed) => [
      {
        access_code_id: seed.devices.augustLock.accessCode.access_code_id,
        name: "new name",
      },
    ],
    modifiesState: true,
  },
  "AccessCode"
)
test.serial(
  "change type to ongoing",
  testAPIMethod("accessCodes.update"),
  {
    args: (seed) => [
      {
        access_code_id: seed.devices.augustLock.accessCode.access_code_id,
        type: "ongoing",
      },
    ],
    modifiesState: true,
  },
  "OngoingAccessCode"
)
test.serial(testAPIMethod("connectedAccounts.list"), {}, "ConnectedAccount[]")
test.serial(
  "by email",
  testAPIMethod("connectedAccounts.get"),
  {
    args: (seed) => [
      {
        email: "user-3@example.com",
      },
    ],
  },
  "ConnectedAccount"
)
test.serial(
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
test.serial(
  testAPIMethod("connectedAccounts.delete"),
  {
    args: (seed) => [
      {
        connected_account_id: seed.devices.augustLock.connectedAccountId,
      },
    ],
    modifiesState: true,
  },
  "{}"
)
