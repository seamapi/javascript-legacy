import { AxiosRequestConfig } from "axios"
import { SuccessfulAPIResponse } from "./types/globals"
import {
  LockGetResponse,
  LockLockDoorResponse,
  LocksListResponse,
  LockUnlockDoorResponse,
  ResetSandboxResponse,
  WorkspaceGetResponse,
  WorkspacesListResponse,
} from "./types/routes"

export abstract class Routes {
  public abstract makeRequest<T>(
    request: AxiosRequestConfig
  ): Promise<SuccessfulAPIResponse<T>>

  public readonly workspaces = {
    list: () =>
      this.makeRequest<WorkspacesListResponse>({
        url: "/workspaces/list",
      }),
    get: () =>
      this.makeRequest<WorkspaceGetResponse>({
        url: "/workspaces/get",
      }),
    resetSandbox: () =>
      this.makeRequest<ResetSandboxResponse>({
        url: "/workspaces/reset_sandbox",
        method: "POST",
      }),
  }

  public readonly locks = {
    list: (connectedAccountId?: string) =>
      this.makeRequest<LocksListResponse>({
        url: "/locks/list",
        params: connectedAccountId
          ? {
              connected_account_id: connectedAccountId,
            }
          : {},
      }),
    get: (deviceId: string) =>
      this.makeRequest<LockGetResponse>({
        url: "/locks/get",
        params: {
          device_id: deviceId,
        },
      }),
    lockDoor: (deviceId: string) =>
      this.makeRequest<LockLockDoorResponse>({
        url: "/locks/lock_door",
        data: {
          device_id: deviceId,
        },
        method: "POST",
      }),
    unlookDoor: (deviceId: string) =>
      this.makeRequest<LockUnlockDoorResponse>({
        url: "/locks/unlock_door",
        data: {
          device_id: deviceId,
        },
        method: "POST",
      }),
  }
}
