import { SeamEvent } from "seamapi-types"
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

export interface SeamError {
  error_code: string
  message: string
}

export interface SeamWarning {
  warning_code: string
  message: string
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
  errors: SeamError[]
  warnings: SeamWarning[]
  created_at: string
}

export interface LockProperties extends CommonDeviceProperties {
  locked: boolean
  door_open?: boolean
  battery_level?: number
  has_direct_power?: boolean
  manufacturer?: string
  supported_code_lengths?: number[]

  schlage_metadata?: {
    device_id: string
    device_name: string
    access_code_length: number
    model?: string
  }

  august_metadata?: {
    lock_id: string
    lock_name: string
    house_name: string
    has_keypad: boolean
    model?: string
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
  custom_redirect_failure_url?: null | string
  url: string
  authorized_at?: null | string
}

export interface AccessCodeBase {
  access_code_id: string
  device_id: string
  name: string | null
  code: string | null
  starts_at: unknown
  ends_at: unknown
  common_code_key: string | null
  is_waiting_for_code_assignment?: true
  errors?: SeamError[]
  warnings?: SeamWarning[]
}

export interface OngoingAccessCode extends AccessCodeBase {
  type: "ongoing"
  created_at: string
  status: "setting" | "set" | "removing" | "unset"
  starts_at: null
  ends_at: null
}

export interface TimeBoundAccessCode extends AccessCodeBase {
  type: "time_bound"
  created_at: string
  status: "setting" | "set" | "removing" | "unset"
  starts_at: string
  ends_at: string
}

export type AccessCode = OngoingAccessCode | TimeBoundAccessCode

export interface UserIdentifier {
  email: string
}

export interface ConnectedAccount {
  connected_account_id: string
  created_at: string
  user_identifier: UserIdentifier
  account_type: Provider
  errors: SeamError[]
  warnings: SeamWarning[]
}

export interface Webhook {
  webhook_id: string
  url: string
  event_types?: string[]
  secret?: string
}

type Flatten<EventType extends SeamEvent["event_type"]> =
  EventType extends SeamEvent["event_type"]
    ? {
        event_id: string
        event_type: EventType
        occurred_at: string
        created_at: string
      } & Extract<SeamEvent, { event_type: EventType }>["payload"]
    : never

export type Event = Flatten<SeamEvent["event_type"]>
