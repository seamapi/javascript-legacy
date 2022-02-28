# Javascript / Typescript Seam API Library

Control locks, lights and other internet of things devices with Seam's simple
API. Check out [the documentation](./docs/modules.md) or [some examples](./examples).

## Usage

```ts
// Replace with
// const Seam = require("seamapi")
// if not using ES6 modules and/or TypeScript.
import Seam from "seamapi";

// Seam will automatically use the SEAM_API_KEY environment variable if you
// don't provide an apiKey to `new Seam()`
const seam = new Seam();

const myLock = await seam.locks.get({ name: "My Lock" });
const myLockId = myLock.device_id
await seam.locks.lockDoor(myLockId);

console.log(await seam.locks.list())
/*
[
  {
    device_id: '1815b031-e531-432a-9ae6-b3f2cfb77cab',
    device_type: 'smartthings_lock',
    capabilities_supported: [ 'access_code', 'lock' ],
    properties: {
      locked: true,
      online: true,
      name: 'My Lock'
    },
    connected_account_id: '1696fff5-b791-4e30-b039-d8110c78231c',
    workspace_id: '2ff17969-b283-426f-9e8f-045323615eee',
    created_at: '2022-02-25T08:47:56.486Z'
  }
]
*/

await seam.accessCodes.create({
  name: "Some Access Code",
  code: "1234",
  device_id: someLockId,
});

console.log(await seam.accessCodes.list({ device_id: myLockId }))
/*
[
  {
    access_code_id: '6a556ffe-3253-4c31-804e-2c0a32d9015f',
    code: '1234',
    name: 'Some Access Code',
    type: 'ongoing',
    status: 'set',
    created_at: '2022-02-25T18:46:20.318Z'
  }
]
*/

```
