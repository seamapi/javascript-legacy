import {
  AccessCode,
  ActionAttempt,
  ActionType,
  CommonDeviceProperties,
  ConnectWebview,
  ConnectedAccount,
  Device,
  DeviceProvider,
  Event,
  LockDevice,
  UnmanagedAccessCode,
  UnmanagedDevice,
  ClientSession,
  Webhook,
  Workspace,
  NoiseThresholds,
  DeviceModel,
  ClimateSettingSchedule,
} from "./models"

// Workspaces
export interface WorkspacesListResponse {
  workspaces: Workspace[]
}
export interface WorkspaceGetResponse {
  workspace: Workspace & {
    connect_partner_name: string
  }
}
export interface WorkspaceResetSandboxResponse {
  message: string
}

// Locks
export interface LocksListResponse {
  locks: LockDevice[]
}

export interface LockGetResponse {
  lock: LockDevice
}

// Devices
export interface DevicesListResponse {
  devices: Device<CommonDeviceProperties>[]
}
export interface DeviceGetResponse {
  device: Device<CommonDeviceProperties>
}

// Unmanaged Devices
export interface UnmanagedDeviceGetResponse {
  device: UnmanagedDevice
}
export interface UnmanagedDeviceListResponse {
  devices: UnmanagedDevice[]
}

// Device Providers
export interface DeviceProvidersListResponse {
  device_providers: DeviceProvider[]
}

// Connect Webview
export interface ConnectWebviewsListResponse {
  connect_webviews: ConnectWebview[]
}
export interface ConnectWebviewGetResponse {
  connect_webview: ConnectWebview
}
export interface ConnectWebviewCreateResponse {
  connect_webview: Omit<ConnectWebview, "connected_account_id"> & {
    custom_redirect_url: null | string
    custom_redirect_failure_url: null | string
  }
}

// Access Codes
export interface AccessCodesListResponse {
  access_codes: AccessCode[]
}
export interface AccessCodeGetResponse {
  access_code: AccessCode
}
export interface AccessCodeCreateResponse
  extends AccessCodeGetResponse,
    ActionAttemptGetResponse {}

export interface AccessCodeUpdateResponse
  extends ActionAttemptCreateResponse<"UPDATE_ACCESS_CODE"> {}

export interface AccessCodeCreateMultipleResponse {
  access_codes: AccessCode[]
}

export interface PullBackupAccessCodeResponse {
  backup_access_code: AccessCode
}

// Unmanaged Access Codes
export interface UnmanagedAccessCodesListResponse {
  access_codes: UnmanagedAccessCode[]
}
export interface UnmanagedAccessCodesGetResponse {
  access_code: UnmanagedAccessCode
}

// Connected Accounts
export interface ConnectedAccountsListResponse {
  connected_accounts: ConnectedAccount[]
}
export interface ConnectedAccountsGetResponse {
  connected_account: ConnectedAccount
}

// Webhooks
export interface WebhookListResponse {
  webhooks: Webhook[]
}

export interface WebhookGetResponse {
  webhook: Webhook
}

// Action Attempts
// Returned from endpoints like /locks/lock_door
export interface ActionAttemptCreateResponse<
  T extends ActionType = ActionType
> {
  action_attempt: ActionAttempt<T>
}

export interface ActionAttemptGetResponse<T extends ActionType = ActionType> {
  action_attempt: ActionAttempt<T>
}

// Events
export interface EventsListResponse {
  events: Event[]
}

export interface EventGetResponse {
  event: Event
}

// Noise Thresholds
export type NoiseThresholdsListResponse = {
  noise_thresholds: NoiseThresholds[]
}

// Client Sessions

export type ClientSessionsCreateResponse = {
  client_session: ClientSession
}

export type ClientSessionsGetResponse = {
  client_session: ClientSession
}

export type ClientSessionsListResponse = {
  client_sessions: Omit<
    ClientSession,
    "connected_account_ids" | "connect_webview_ids"
  >[]
}

export type ClientSessionsGetOrCreateResponse = ClientSessionsCreateResponse

/** @deprecated use ClientSessionsCreateResponse instead */
export type ClientSessionsResponse = ClientSessionsCreateResponse

export type DeviceModelsListResponse = {
  device_models: DeviceModel[]
}

// Thermostats
export interface ThermostatsListResponse {
  thermostats: Device<CommonDeviceProperties>[]
}
export interface ThermostatGetResponse {
  thermostat: Device<CommonDeviceProperties>
}

// Climate Setting Schedules
export interface ClimateSettingSchedulesListResponse {
  climate_setting_schedules: ClimateSettingSchedule[]
}

export interface ClimateSettingScheduleGetResponse {
  climate_setting_schedule: ClimateSettingSchedule
}

export interface ClimateSettingScheduleCreateResponse {
  climate_setting_schedule: ClimateSettingSchedule
}

export interface ClimateSettingScheduleUpdateResponse {
  climate_setting_schedule: ClimateSettingSchedule
}

export type ClimateSettingScheduleDeleteResponse = void
