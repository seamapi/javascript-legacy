import {
  AccessCode,
  ActionAttempt,
  ConnectWebview,
  Device,
  LockDevice,
  Workspace,
  ConnectedAccount,
  ActionType,
  CommonDeviceProperties,
  Webhook,
  Event,
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
