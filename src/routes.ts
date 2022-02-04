import { AxiosRequestConfig } from "axios"
import { SuccessfulAPIResponse } from "./types/globals"
import {
  AccessCodeCreateRequest,
  ConnectWebviewCreateRequest,
} from "./types/route-requests"
import {
  AccessCodeCreateResponse,
  AccessCodesListResponse,
  ConnectWebviewCreateResponse,
  ConnectWebviewGetResponse,
  ConnectWebviewListResponse,
  DevicesListResponse,
  LockGetResponse,
  LockLockDoorResponse,
  LocksListResponse,
  LockUnlockDoorResponse,
  WorkspaceResetSandboxResponse,
  WorkspaceGetResponse,
  WorkspacesListResponse,
} from "./types/route-responses"

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
      this.makeRequest<WorkspaceResetSandboxResponse>({
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
    unlockDoor: (deviceId: string) =>
      this.makeRequest<LockUnlockDoorResponse>({
        url: "/locks/unlock_door",
        data: {
          device_id: deviceId,
        },
        method: "POST",
      }),
  }

  public readonly devices = {
    list: (connectedAccountId?: string) =>
      this.makeRequest<DevicesListResponse>({
        url: "/devices/list",
        params: connectedAccountId
          ? {
              connected_account_id: connectedAccountId,
            }
          : {},
      }),
    get: (deviceId: string) =>
      this.makeRequest<LockGetResponse>({
        url: "/devices/get",
        params: {
          device_id: deviceId,
        },
      }),
  }

  public readonly connectWebviews = {
    list: () =>
      this.makeRequest<ConnectWebviewListResponse>({
        url: "/connect_webviews/list",
      }),
    get: (connectWebviewId: string) =>
      this.makeRequest<ConnectWebviewGetResponse>({
        url: "/connect_webviews/get",
        params: {
          connect_webview_id: connectWebviewId,
        },
      }),
    create: (params: ConnectWebviewCreateRequest) =>
      this.makeRequest<ConnectWebviewCreateResponse>({
        url: "/connect_webviews/create",
        method: "POST",
        data: params,
      }),
  }

  public readonly accessCodes = {
    list: (deviceId: string) =>
      this.makeRequest<AccessCodesListResponse>({
        url: "/access_codes/list",
        params: {
          device_id: deviceId,
        },
      }),

    create: (deviceId: string, params: AccessCodeCreateRequest) =>
      this.makeRequest<AccessCodeCreateResponse>({
        url: "/access_codes/create",
        method: "POST",
        data: {
          device_id: deviceId,
          ...params,
        },
      }),
  }
}
