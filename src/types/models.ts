export interface Workspace {
  workspace_id: string
  connect_partner_name?: string
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
  name: string
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

export type AnyDevice = Device<any, DeviceType>
export type LockDevice = Device<LockProperties, LockDeviceType>

export type ActionType =
  | "LOCK_DOOR"
  | "UNLOCK_DOOR"
  | "CREATE_ACCESS_CODE"
  | "DELETE_ACCESS_CODE"

interface ActionAttemptBase<T extends ActionType> {
  action_attempt_id: string
  action_type: T
  status: string
  result: any
  error: any
}

export interface PendingActionAttempt<T extends ActionType>
  extends ActionAttemptBase<T> {
  status: "pending"
  result: null
  error: null
}

export interface ActionAttemptWithError<T extends ActionType>
  extends ActionAttemptBase<T> {
  status: "error"
  result: null
  error: {
    type: string
    message: string
  }
}

export interface SuccessfulActionAttempt<T extends ActionType>
  extends ActionAttemptBase<T> {
  status: "success"
  error: null
  result: ActionAttemptResultTypeMap[T]
}

export type ActionAttempt<T extends ActionType = ActionType> =
  | PendingActionAttempt<T>
  | ActionAttemptWithError<T>
  | SuccessfulActionAttempt<T>

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
  connected_account_id?: null | string
  custom_redirect_url?: null | string
  url: string
}

export interface AccessCode {
  access_code_id: string
  code: string
  name: string
  type: "ongoing"
  created_at: string
  status: "setting" | "set" | "removing" | "unset"
}

export interface ConnectedAccount {
  connected_account_id: string
  created_at: string
  user_identifier: string
  account_type: Provider
}

export interface SeamObjectTypeMap<ActionAttemptType extends ActionType = any> {
  action_attempt: ActionAttempt<ActionAttemptType>
  access_code: AccessCode
  access_codes: AccessCode[]
  device: Device<any, any>
  devices: Device<any, any>[]
  lock: Device<LockProperties, any>
  locks: Device<LockProperties, any>[]
  connect_webview: ConnectWebview
  connect_webviews: ConnectWebview[]
  connected_account: ConnectedAccount
  connected_accounts: ConnectedAccount[]
  workspace: Workspace
  workspaces: Workspace[]
}

export interface ActionAttemptResultTypeMap {
  LOCK_DOOR: {}
  UNLOCK_DOOR: {}
  CREATE_ACCESS_CODE: { access_code: AccessCode }
  DELETE_ACCESS_CODE: {}
}

export interface DeviceProperties {
  name?: string
}
