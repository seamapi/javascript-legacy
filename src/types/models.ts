export interface Workspace {
  workspace_id: string
  name: string
  is_sandbox: boolean
}

export type LockDeviceType = "august_lock" | "schlage_lock" | "yale_lock"
export type NoiseDetectionDeviceType = "noiseaware_activity_zone"
export type DeviceType = LockDeviceType | NoiseDetectionDeviceType

export type Provider =
  | "august"
  | "schlage"
  | "yale"
  | "noiseaware"
  | "smartthings"

export interface Device<Properties, Type = DeviceType> {
  device_id: string
  workspace_id: string
  properties: Properties
  location: null
  device_type: Type
  connected_account_id: string
  capabilities_supported: unknown[]
  created_at: string
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
    action_type: "LOCK_DOOR" | "UNLOCK_DOOR" | "CREATE_ACCESS_CODE"
    status: string
  }
}

export interface ConnectWebview {
  connect_webview_id: string
  workspace_id: string
  device_selection_mode: string
  accepted_providers: Provider[]
  accepted_devices: unknown[]
  any_provider_allowed: boolean
  any_device_allowed: null | boolean
  created_at: string
  login_successful: boolean
  status: "pending" | "authorized"
  connected_account_id: null | string
  url: string
}

export interface AccessCode {
  code: string
  name: string
  type: "ongoing"
  created_at: string
}

export interface ConnectedAccount {
  connected_account_id: string
  created_at: string
  user_identifier: string
  account_type: Provider
}
