export interface Workspace {
  workspace_id: string
  connect_partner_name?: string
  name: string
  is_sandbox: boolean
}

export type LockDeviceType =
  | "august_lock"
  | "schlage_lock"
  | "yale_lock"
  | "smartthings_lock"
export type NoiseDetectionDeviceType = "noiseaware_activity_zone"
export type DeviceType = LockDeviceType | NoiseDetectionDeviceType

export enum Provider {
  AUGUST = "august",
  BUTTERFLYMX = "butterflymx",
  GENIE = "genie",
  SALTO = "salto",
  SCHLAGE = "schlage",
  YALE = "yale",
  NOISEAWARE = "noiseaware",
  SMARTTHINGS = "smartthings",
}

export type CommonDeviceProperties = {
  name: string
  online: boolean
}
export interface Device<
  Properties extends CommonDeviceProperties,
  Type = DeviceType
> {
  device_id: string
  workspace_id: string
  properties: Properties
  location: null
  device_type: Type
  connected_account_id: string
  capabilities_supported: unknown[]
  created_at: string
}

export interface LockProperties extends CommonDeviceProperties {
  locked: boolean
  door_open?: boolean
  battery_level?: number

  schlage_metadata?: {
    device_id: string
    device_name: string
  }

  august_metadata?: {
    lock_id: string
    lock_name: string
    house_name: string
  }

  smartthings_metadata?: unknown
}

export type AnyDevice = Device<any, DeviceType>
export type LockDevice = Device<LockProperties, LockDeviceType>

export type ActionType =
  | "LOCK_DOOR"
  | "UNLOCK_DOOR"
  | "CREATE_ACCESS_CODE"
  | "UPDATE_ACCESS_CODE"
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

export interface ActionAttemptResultTypeMap
  extends Record<ActionType, unknown> {
  CREATE_ACCESS_CODE: { access_code: AccessCode }
  UPDATE_ACCESS_CODE: { access_code: AccessCode }
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
  authorized_at?: null | string
}

export interface AccessCodeBase {
  access_code_id: string
  name?: string
  code: string
}

export interface OngoingAccessCode extends AccessCodeBase {
  type: "ongoing"
  created_at: string
  status: "setting" | "set" | "removing" | "unset"
}

export interface TimeBoundAccessCode extends AccessCodeBase {
  type: "time_bound"
  created_at: string
  status: "setting" | "set" | "removing" | "unset"
  starts_at: string
  ends_at: string
}

export type AccessCode = OngoingAccessCode | TimeBoundAccessCode

export interface ConnectedAccount {
  connected_account_id: string
  created_at: string
  user_identifier: string
  account_type: Provider
}

export interface Webhook {
  id: string
  uid?: string
  url: string
  description?: string
  disabled: boolean
  channels?: string[]
  filterTypes?: string[]
  rateLimit?: number
  version: number
  createdAt: string
  updateAt: string
  secret?: string
}
