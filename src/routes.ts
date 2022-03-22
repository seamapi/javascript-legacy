import { AxiosRequestConfig } from "axios"
import pRetry from "p-retry"
import { SuccessfulAPIResponse } from "./types/globals"
import {
  ActionAttempt,
  SuccessfulActionAttempt,
  ActionAttemptResultTypeMap,
  ActionType,
  OngoingAccessCode,
  TimeBoundAccessCode,
} from "./types/models"
import {
  AccessCodeCreateRequest,
  AccessCodeDeleteRequest,
  AccessCodeCreateScheduledRequest,
  AccessCodeCreateOngoingRequest,
  ConnectWebviewCreateRequest,
  DeviceUpdateRequest,
} from "./types/route-requests"
import { SeamActionAttemptError } from "./lib/api-error"
import {
  AccessCodesListResponse,
  ActionAttemptGetResponse,
  ConnectedAccountsGetResponse,
  ConnectedAccountsListResponse,
  ConnectWebviewCreateResponse,
  ConnectWebviewGetResponse,
  ConnectWebviewsListResponse,
  DeviceGetResponse,
  DevicesListResponse,
  LockGetResponse,
  LocksListResponse,
  WorkspaceResetSandboxResponse,
  WorkspacesListResponse,
  WorkspaceGetResponse,
  ActionAttemptCreateResponse,
} from "./types/route-responses"

export abstract class Routes {
  public abstract makeRequest<T>(
    request: AxiosRequestConfig
  ): Promise<SuccessfulAPIResponse<T>>

  private async awaitActionAttempt<T extends ActionType>(
    actionAttempt: ActionAttempt<T>
  ): Promise<SuccessfulActionAttempt<T>> {
    let fetchedActionAttempt = actionAttempt

    if (fetchedActionAttempt.status === "pending") {
      // TODO: use long polling when Seam Connect supports it
      await pRetry(
        async () => {
          fetchedActionAttempt = await this.actionAttempts.get(
            fetchedActionAttempt.action_attempt_id
          )

          if (fetchedActionAttempt.status === "pending") {
            throw new Error("Action attempt is still pending")
          }
        },
        { maxTimeout: 60 * 1000 }
      )
    }

    if (fetchedActionAttempt.status === "error") {
      throw new SeamActionAttemptError(
        fetchedActionAttempt.error.type,
        fetchedActionAttempt.error.message,
        fetchedActionAttempt.action_type
      )
    }

    return fetchedActionAttempt as SuccessfulActionAttempt<T>
  }

  private async makeRequestAndFormat<T = void, U extends T = T>(
    innerObjectName: keyof U,
    request: AxiosRequestConfig
  ): Promise<U[typeof innerObjectName]> {
    const response = await this.makeRequest<U>(request)
    return response[innerObjectName]
  }

  private async createActionAttemptAndWait<T extends ActionType>(
    request: AxiosRequestConfig
  ): Promise<ActionAttemptResultTypeMap[T]> {
    const pendingActionAttempt = await this.makeRequestAndFormat<
      ActionAttemptCreateResponse<T>
    >("action_attempt", request)
    const actionAttempt = await this.awaitActionAttempt<T>(pendingActionAttempt)

    return actionAttempt.result
  }

  public readonly workspaces = {
    list: () =>
      this.makeRequestAndFormat<WorkspacesListResponse>("workspaces", {
        url: "/workspaces/list",
      }),
    get: () =>
      this.makeRequestAndFormat<WorkspaceGetResponse>("workspace", {
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
      this.makeRequestAndFormat<LocksListResponse>("locks", {
        url: "/locks/list",
        params: connectedAccountId
          ? {
              connected_account_id: connectedAccountId,
            }
          : {},
      }),
    get: (deviceId: string) =>
      this.makeRequestAndFormat<LockGetResponse>("lock", {
        url: "/locks/get",
        params: {
          device_id: deviceId,
        },
      }),
    lockDoor: (deviceId: string) =>
      this.createActionAttemptAndWait({
        url: "/locks/lock_door",
        data: {
          device_id: deviceId,
        },
        method: "POST",
      }),
    unlockDoor: (deviceId: string) =>
      this.createActionAttemptAndWait({
        url: "/locks/unlock_door",
        data: {
          device_id: deviceId,
        },
        method: "POST",
      }),
  }

  public readonly devices = {
    list: (connectedAccountId?: string) =>
      this.makeRequestAndFormat<DevicesListResponse>("devices", {
        url: "/devices/list",
        params: connectedAccountId
          ? {
              connected_account_id: connectedAccountId,
            }
          : {},
      }),
    get: (deviceId: string) =>
      this.makeRequestAndFormat<DeviceGetResponse>("device", {
        url: "/devices/get",
        params: {
          device_id: deviceId,
        },
      }),
    update: (params: DeviceUpdateRequest) =>
      this.makeRequest({
        url: "/devices/update",
        method: "PATCH",
        data: params,
      }),
  }

  public readonly connectWebviews = {
    list: () =>
      this.makeRequestAndFormat<ConnectWebviewsListResponse>(
        "connect_webviews",
        {
          url: "/connect_webviews/list",
        }
      ),
    get: (connectWebviewId: string) =>
      this.makeRequestAndFormat<ConnectWebviewGetResponse>("connect_webview", {
        url: "/connect_webviews/get",
        params: {
          connect_webview_id: connectWebviewId,
        },
      }),
    create: (params: ConnectWebviewCreateRequest) =>
      this.makeRequestAndFormat<ConnectWebviewCreateResponse>(
        "connect_webview",
        {
          url: "/connect_webviews/create",
          method: "POST",
          data: params,
        }
      ),
  }

  public readonly accessCodes = {
    list: (params: { device_id: string }) =>
      this.makeRequestAndFormat<AccessCodesListResponse>("access_codes", {
        url: "/access_codes/list",
        params,
      }),

    create: (async (params: AccessCodeCreateRequest) => {
      const parsedParams: any = Object.assign({}, params)

      if (
        (params as AccessCodeCreateScheduledRequest).starts_at === "object" &&
        (params as AccessCodeCreateScheduledRequest).starts_at !== null
      ) {
        parsedParams.starts_at = (
          (params as AccessCodeCreateScheduledRequest).starts_at as Date
        ).toISOString()
      }

      if (
        typeof (params as AccessCodeCreateScheduledRequest).ends_at ===
          "object" &&
        (params as AccessCodeCreateScheduledRequest).starts_at !== null
      ) {
        parsedParams.ends_at = (
          (params as AccessCodeCreateScheduledRequest).ends_at as Date
        ).toISOString()
      }

      const action =
        await this.createActionAttemptAndWait<"CREATE_ACCESS_CODE">({
          url: "/access_codes/create",
          method: "POST",
          data: parsedParams,
        })

      return action.access_code
    }) as {
      (params: AccessCodeCreateOngoingRequest): Promise<OngoingAccessCode>
      (params: AccessCodeCreateScheduledRequest): Promise<TimeBoundAccessCode>
    },

    delete: (params: AccessCodeDeleteRequest) =>
      this.createActionAttemptAndWait({
        url: "/access_codes/delete",
        method: "POST",
        data: params,
      }),
  }

  public readonly connectedAccounts = {
    list: () =>
      this.makeRequestAndFormat<ConnectedAccountsListResponse>(
        "connected_accounts",
        {
          url: "/connected_accounts/list",
        }
      ),

    get: (connectedAccountId: string) =>
      this.makeRequestAndFormat<ConnectedAccountsGetResponse>(
        "connected_account",
        {
          url: "/connected_accounts/get",
          params: {
            connected_account_id: connectedAccountId,
          },
        }
      ),
  }

  public readonly actionAttempts = {
    get: <T extends ActionType = ActionType>(actionAttemptId: string) =>
      this.makeRequestAndFormat<ActionAttemptGetResponse<T>>("action_attempt", {
        url: "/action_attempts/get",
        params: {
          action_attempt_id: actionAttemptId,
        },
      }),
  }
}
