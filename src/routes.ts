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
  AccessCodeGetRequest,
  AccessCodeCreateRequest,
  AccessCodeDeleteRequest,
  AccessCodeCreateScheduledRequest,
  AccessCodeCreateOngoingRequest,
  ConnectWebviewCreateRequest,
  ConnectWebviewDeleteRequest,
  ConnectedAccountsGetRequest,
  ConnectedAccountsDeleteRequest,
  DeviceUpdateRequest,
  DeviceGetRequest,
  DevicesListRequest,
  DeviceDeleteRequest,
  AccessCodeUpdateRequest,
  WebhookGetRequest,
  WebhookCreateRequest,
  EventsListRequest,
} from "./types/route-requests"
import { SeamActionAttemptError } from "./lib/api-error"
import {
  AccessCodesListResponse,
  AccessCodeGetResponse,
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
  WebhookListResponse,
  WebhookGetResponse,
  EventsListResponse,
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
    list: (params?: DevicesListRequest) =>
      this.makeRequestAndFormat<DevicesListResponse>("devices", {
        url: "/devices/list",
        params,
      }),
    get: (params: DeviceGetRequest) =>
      this.makeRequestAndFormat<DeviceGetResponse>("device", {
        url: "/devices/get",
        params,
      }),
    update: (params: DeviceUpdateRequest) =>
      this.makeRequest({
        url: "/devices/update",
        method: "PATCH",
        data: params,
      }),
    delete: (params: DeviceDeleteRequest) =>
      this.makeRequest({
        url: "/devices/delete",
        method: "DELETE",
        params: params,
      }),
  }

  public readonly events = {
    list: (params?: EventsListRequest) =>
      this.makeRequestAndFormat<EventsListResponse>("events", {
        url: "/events/list",
        method: "POST",
        data: {
          ...params,
          since: params?.since ?? new Date(0).toISOString(),
        },
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
    delete: (params: ConnectWebviewDeleteRequest) =>
      this.makeRequest({
        url: "/connect_webviews/delete",
        method: "DELETE",
        data: params,
      }),
  }

  public readonly accessCodes = {
    list: (params: { device_id: string }) =>
      this.makeRequestAndFormat<AccessCodesListResponse>("access_codes", {
        url: "/access_codes/list",
        params,
      }),
    get: (params: AccessCodeGetRequest) =>
      this.makeRequestAndFormat<AccessCodeGetResponse>("access_code", {
        url: "/access_codes/get",
        params,
      }),
    create: async (params: AccessCodeCreateRequest) =>
      (await this.makeRequest({
        url: "/access_codes/create",
        method: "POST",
        data: params,
      })) as {
        (params: AccessCodeCreateOngoingRequest): Promise<OngoingAccessCode>
        (params: AccessCodeCreateScheduledRequest): Promise<TimeBoundAccessCode>
      },

    // We can't narrow the return type here like we do with create because we're given partial input
    update: async (
      params: AccessCodeUpdateRequest
    ): Promise<OngoingAccessCode | TimeBoundAccessCode> => {
      const action =
        await this.createActionAttemptAndWait<"UPDATE_ACCESS_CODE">({
          url: "/access_codes/update",
          method: "POST",
          data: params,
        })

      return action.access_code
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

    get: (params: ConnectedAccountsGetRequest) =>
      this.makeRequestAndFormat<ConnectedAccountsGetResponse>(
        "connected_account",
        {
          url: "/connected_accounts/get",
          params,
        }
      ),
    delete: (params: ConnectedAccountsDeleteRequest) =>
      this.makeRequest({
        url: "/connected_accounts/delete",
        method: "DELETE",
        data: params,
      }),
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

  public readonly webhooks = {
    list: () =>
      this.makeRequestAndFormat<WebhookListResponse>("webhooks", {
        url: "/webhooks/list",
        params: {},
      }),
    get: (params: WebhookGetRequest) =>
      this.makeRequestAndFormat<WebhookGetResponse>("webhook", {
        url: "/webhooks/get",
        params,
      }),
    create: (data: WebhookCreateRequest) =>
      this.makeRequest({
        url: "/webhooks/create",
        method: "POST",
        data,
      }),
    delete: (params: WebhookGetRequest) =>
      this.makeRequest({
        url: `/webhooks/delete`,
        method: "DELETE",
        params,
      }),
  }
}
