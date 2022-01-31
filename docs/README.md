seamapi / [Exports](modules.md)

# Javascript / Typescript Seam API Library

Control locks, lights and other internet of things devices with Seam's simple API. Check out [the documentation](./docs/modules.md) or [some examples](./examples).

## Usage

```ts
import Seam from seamapi

# export SEAM_API_KEY=***
const seam = new Seam()

const someLock = seam.locks.list().devices[0]
const someLockId = someLock.device_id

seam.locks.lockDoor(someLockId)
const { device: someLockedLock } = seam.locks.get(someLockId)
# someLockedLock.properties.locked === true

seam.locks.unlockDoor(someLockId)
```

## In Progress

This library is in progress!
