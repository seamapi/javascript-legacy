# Javascript / Typescript Seam API Library

Control locks, lights and other internet of things devices with Seam's simple API. Check out [the documentation](./docs/modules.md) or [some examples](./examples).


## Usage

```ts
import Seam from seamapi

// export SEAM_API_KEY=***
const seam = new Seam()

const someLock = seam.locks.list().devices[0]
const someLockId = someLock.device_id

seam.locks.lockDoor(someLockId)
const { device: someLockedLock } = seam.locks.get(someLockId)
// someLockedLock.properties.locked === true

seam.locks.unlockDoor(someLockId)

seam.accessCodes.create(someLockId, { name: "Some Access Code", code: "1234" })

const someLockAccessCodes = seam.accessCodes.list(someLockId)
/* 
  someLockAccessCodes = {
    access_codes: [
      {
        access_code_id: "some-access-code-1",
        name: "Some Access Code",
        code: "1234",
        type: "ongoing",
        created_at: "2022-02-01T12:57:40.843Z",
      },
    ],
  }
*/
```

## In Progress

This library is in progress!
