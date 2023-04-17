import { AxiosRequestConfig } from "axios"
import pRetry from "p-retry"
import { SeamActionAttemptError } from "../lib/api-error"
import { SuccessfulAPIResponse } from "../types/globals"
import {
  ActionAttempt,
  ActionAttemptResultTypeMap,
  ActionType,
  OngoingAccessCode,
  SuccessfulActionAttempt,
  TimeBoundAccessCode,
} from "../types/models"
import {
  AccessCodeCreateMultipleOngoingRequest,
  AccessCodeCreateMultipleRequest,
  AccessCodeCreateMultipleScheduledRequest,
  AccessCodeCreateOngoingRequest,
  AccessCodeCreateRequest,
  AccessCodeCreateScheduledRequest,
  AccessCodeDeleteRequest,
  AccessCodeGetRequest,
  AccessCodeUpdateRequest,
  ConnectWebviewCreateRequest,
  ConnectWebviewDeleteRequest,
  ConnectedAccountsDeleteRequest,
  ConnectedAccountsGetRequest,
  DeviceDeleteRequest,
  DeviceGetRequest,
  DeviceProvidersListRequest,
  DeviceUpdateRequest,
  DevicesListRequest,
  EventsListRequest,
  UnmanagedDeviceUpdateRequest,
  WebhookCreateRequest,
  WebhookGetRequest,
} from "../types/route-requests"
import {
  AccessCodeCreateMultipleResponse,
  AccessCodeCreateResponse,
  AccessCodeGetResponse,
  AccessCodesListResponse,
  ActionAttemptCreateResponse,
  ActionAttemptGetResponse,
  ConnectWebviewCreateResponse,
  ConnectWebviewGetResponse,
  ConnectWebviewsListResponse,
  ConnectedAccountsGetResponse,
  ConnectedAccountsListResponse,
  DeviceGetResponse,
  DeviceProvidersListResponse,
  DevicesListResponse,
  EventsListResponse,
  LockGetResponse,
  LocksListResponse,
  UnmanagedAccessCodesGetResponse,
  UnmanagedAccessCodesListResponse,
  UnmanagedDeviceListResponse,
  WebhookGetResponse,
  WebhookListResponse,
  WorkspaceGetResponse,
  WorkspaceResetSandboxResponse,
  WorkspacesListResponse,
} from "../types/route-responses"

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
        // @ts-expect-error UPSTREAM: https://github.com/DefinitelyTyped/DefinitelyTyped/commit/6f77b38130593a06e1988f1d3df162823ae186af#commitcomment-72928468
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
  ): Promise<
    ActionAttemptResultTypeMap[T] & { actionAttempt: ActionAttempt<T> }
  > {
    const pendingActionAttempt = await this.makeRequestAndFormat<
      ActionAttemptCreateResponse<T>
    >("action_attempt", request)
    const actionAttempt = await this.awaitActionAttempt<T>(pendingActionAttempt)

    return {
      ...(actionAttempt.result as any),
      actionAttempt,
    }
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
    unmanaged: {
      list: (params: DevicesListRequest) =>
        this.makeRequestAndFormat<UnmanagedDeviceListResponse>("devices", {
          url: "/devices/unmanaged/list",
          params,
        }),
      update: (params: UnmanagedDeviceUpdateRequest) =>
        this.makeRequest({
          url: "/devices/unmanaged/update",
          method: "PATCH",
          data: params,
        }),
    },

    list: (params?: DevicesListRequest) =>
      this.makeRequestAndFormat<DevicesListResponse>("devices", {
        url: "/devices/list",
        params,
      }),
    listDeviceProviders: (params?: DeviceProvidersListRequest) =>
      this.makeRequestAndFormat<DeviceProvidersListResponse>(
        "device_providers",
        {
          url: "/devices/list_device_providers",
          params,
        }
      ),
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
    unmanaged: {
      delete: (params: { access_code_id: string; device_id?: string }) =>
        this.makeRequest({
          url: "/access_codes/unmanaged/delete",
          method: "DELETE",
          data: params,
        }),
      get: (params: { access_code_id: string }) =>
        this.makeRequestAndFormat<UnmanagedAccessCodesGetResponse>(
          "access_code",
          {
            url: "/access_codes/unmanaged/get",
            params,
          }
        ), 
      list: (params: { device_id: string }) =>
        this.makeRequestAndFormat<UnmanagedAccessCodesListResponse>(
          "access_codes",
          {
            url: "/access_codes/unmanaged/list",
            params,
          }
        ),
      update: (params: { access_code_id: string; is_managed: true }) =>
        this.makeRequest({
          url: "/access_codes/unmanaged/update",
          method: "PATCH",
          data: params,
        }),
    },

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
    create: (async (params: AccessCodeCreateRequest) =>
      this.makeRequestAndFormat<AccessCodeCreateResponse>("access_code", {
        url: "/access_codes/create",
        method: "POST",
        data: params,
      })) as {
      (params: AccessCodeCreateOngoingRequest): Promise<OngoingAccessCode>
      (params: AccessCodeCreateScheduledRequest): Promise<TimeBoundAccessCode>
    },
    createMultiple: (async (params: AccessCodeCreateMultipleRequest) =>
      this.makeRequestAndFormat<AccessCodeCreateMultipleResponse>(
        "access_codes",
        {
          url: "/access_codes/create_multiple",
          method: "POST",
          data: params,
        }
      )) as {
      (params: AccessCodeCreateMultipleOngoingRequest): Promise<
        OngoingAccessCode[]
      >
      (params: AccessCodeCreateMultipleScheduledRequest): Promise<
        TimeBoundAccessCode[]
      >
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
