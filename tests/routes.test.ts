import test from "ava"
import { Provider } from "../src"
import { testAPIMethod } from "./fixtures/helpers/test-api-method-macro"

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
  },
  "{}"
)
test(
  testAPIMethod("locks.unlockDoor"),
  {
    args: (seed) => [seed.devices.schlageLock.id1],
    modifiesState: true,
  },
  "{}"
)

// Devices
test(testAPIMethod("devices.list"), {}, "AnyDevice[]")
test(
  "with connected account ID",
  testAPIMethod("devices.list"),
  {
    args: (seed) => [seed.devices.schlageLock.connectedAccountId],
  },
  "AnyDevice[]"
)
test(
  "by ID",
  testAPIMethod("devices.get"),
  {
    args: (seed) => [{ device_id: seed.devices.schlageLock.id1 }],
  },
  "AnyDevice"
)
test(
  "by name",
  testAPIMethod("devices.get"),
  {
    args: (seed) => [{ name: seed.devices.schlageLock.name1 }],
  },
  "AnyDevice"
)

// Connect Webviews
test(testAPIMethod("connectWebviews.list"), {}, "ConnectWebview[]")
test(
  testAPIMethod("connectWebviews.get"),
  {
    args: (seed) => [seed.devices.schlageLock.connectWebviewId],
  },
  "ConnectWebview"
)
test(
  testAPIMethod("connectWebviews.create"),
  {
    args: [
      {
        accepted_providers: [Provider.AUGUST],
      },
    ],
    modifiesState: true,
  },
  "ConnectWebview"
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
      } as any,
    ],
    modifiesState: true,
  },
  "AccessCode"
)

test(
  "scheduled",
  testAPIMethod("accessCodes.create"),
  {
    args: (seed) => [
      {
        device_id: seed.devices.smartThingsLock.id1,
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
