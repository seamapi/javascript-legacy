# Javascript / Typescript Seam API Library

Control locks, lights and other internet of things devices with Seam's simple API. Check out [the documentation](./docs/modules.md) or [some examples](./examples).


## Usage

```ts
import Seam from seamapi

const seam = new Seam()
// Seam will automatically use the SEAM_API_KEY environment variable if you
// don't provide an api_key to `new Seam()`

const someLock = await seam.locks.list().devices[0]
const someLockId = someLock.device_id

await seam.locks.lockDoor(someLockId)
const { device: someLockedLock } = await seam.locks.get(someLockId)
// someLockedLock.properties.locked === true

await seam.locks.unlockDoor(someLockId)

await seam.accessCodes.create(someLockId, { name: "Some Access Code", code: "1234" })

const accessCodeList = await seam.accessCodes.list(someLockId)
console.log(accessCodeList)
/*
{
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
