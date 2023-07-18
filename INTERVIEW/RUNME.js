const Seam = require("../").default

const seam = new Seam({
  apiKey: "",
})

// This will output a list of your devices, you can use this
// to get a device_id
seam.devices.list().then(console.log)

// Can you make this work?
seam.accessCodes.create({
  device_id: "some-device-id-get-from-above",
  code: "1234",
})
