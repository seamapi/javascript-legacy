// todo: remove this file when we move to a monorepo?
export interface CommonDeviceEvent<
  EventType extends string,
  Payload extends Record<string, unknown> | {} = {}
> {
  event_type: EventType
  data: Payload & {
    workspace_id: string
    device_id: string
  }
}

// Devices
export type DeviceConnectedEvent = CommonDeviceEvent<"device.connected">
export type DeviceDisconnectEvent = CommonDeviceEvent<"devices.disconnected">
export type DeviceTamperEvent = CommonDeviceEvent<"devices.tampered">
export type DeviceLowBatteryEvent =
  CommonDeviceEvent<"devices.triggered_low_battery">

// Access codes
export type CreateAccessCodeEvent = CommonDeviceEvent<
  "access_codes.created",
  {
    access_code_id: string
  }
>

// Noise thresholds
export type NoiseDetectedEvent =
  CommonDeviceEvent<"noise_thresholds.detected_noise">

export type SeamEvent =
  | DeviceConnectedEvent
  | DeviceDisconnectEvent
  | DeviceTamperEvent
  | DeviceLowBatteryEvent
  | CreateAccessCodeEvent
  | NoiseDetectedEvent
