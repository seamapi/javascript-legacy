export interface Workspace {
  workspace_id: string
  name: string
  is_sandbox: boolean
}

export type LockDeviceType = "august_lock" | "schlage_lock" | "yale_lock"
export type NoiseDetectionDeviceType = "noiseaware_activity_zone"

export interface Device<Properties, DeviceType = string> {
  device_id: string
  workspace_id: string
  properties: Properties
  location: null
  device_type: DeviceType
  third_party_account_id: string
}

export interface LockProperties {
  locked: boolean
  online: boolean
  door_open?: boolean

  schlage_metadata?: {
    device_id: string
    device_name: string
  }

  august_metadata?: {
    lock_id: string
    lock_name: string
    house_name: string
  }
}

export type LockDevice = Device<LockProperties, LockDeviceType>

export interface ActionAttempt {
  action_attempt: {
    action_attempt_id: string
    status: string
  }
}
