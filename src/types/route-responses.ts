import {
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
  workspace: Workspace
}
export interface ResetSandboxResponse {
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
export interface ConnectWebviewListResponse {
  connect_webviews: ConnectWebview[]
}
export interface ConnectWebviewGetResponse {
  connect_webview: ConnectWebview
}
export interface ConnectWebviewCreateResponse {
  connect_webview: ConnectWebview
}
