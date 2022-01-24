import { ActionAttempt, LockDevice, Workspace } from "./models"

export interface WorkspacesListResponse {
  workspaces: Workspace[]
}

export type WorkspaceGetResponse = Workspace

export interface ResetSandboxResponse {
  message: string
}

export interface LocksListResponse {
  devices: LockDevice[]
}

export type LockGetResponse = LockDevice

export type LockLockDoorResponse = ActionAttempt

export type LockUnlockDoorResponse = ActionAttempt
