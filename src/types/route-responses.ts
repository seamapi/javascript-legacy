import {
  AccessCode,
  ActionAttempt,
  ConnectWebview,
  Device,
  LockDevice,
  Workspace,
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
  devices: LockDevice[]
}

export interface LockGetResponse {
  device: LockDevice
}
export type LockLockDoorResponse = ActionAttempt
export type LockUnlockDoorResponse = ActionAttempt

// Devices
export interface DevicesListResponse {
  devices: Device<unknown>[]
}
export interface DeviceGetResponse {
  device: Device<unknown>
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
  }
}

// Access Codes
export interface AccessCodesListResponse {
  access_codes: AccessCode[]
}
export type AccessCodeCreateResponse = ActionAttempt
