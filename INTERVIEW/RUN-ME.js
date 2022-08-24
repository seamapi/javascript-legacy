const Seam = require("../")

const seam = new Seam({
  // VVV INTERVIEW SHOULD PROVIDE AN API KEY VVV
  apiKey: "",
})

// This will output a list of your devices, you can use this
// to get a device_id
seam.devices.list().then(console.log)

// Can you make this work?
// seam.access_codes.create("some-device-id")
