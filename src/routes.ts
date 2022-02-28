import { AxiosRequestConfig } from "axios"
import { APIResponse, SuccessfulAPIResponse } from "./types/globals"
import {
  ActionAttempt,
  SuccessfulActionAttempt,
  ActionAttemptResultTypeMap,
  ActionType,
  SeamObjectTypeMap,
} from "./types/models"
import {
  AccessCodeCreateRequest,
  AccessCodeDeleteRequest,
  AccessCodeCreateScheduledRequest,
  ConnectWebviewCreateRequest,
} from "./types/route-requests"

type Promisable<T> = T | Promise<T>

export abstract class Routes {
  public abstract makeRequest<T>(
    request: AxiosRequestConfig
  ): Promise<SuccessfulAPIResponse<T>>

  // Simplify/de-nest response (extract the inner object-of-interest)
  private async formatResponse<T extends keyof SeamObjectTypeMap>(
    innerObjectName: T,
    response: APIResponse<any>
  ): Promise<SeamObjectTypeMap[T]> {
    return response[innerObjectName]
  }

  private async awaitActionAttempt<T extends ActionType>(
    actionAttempt: ActionAttempt<T>
  ): Promise<SuccessfulActionAttempt<T>> {
    while (actionAttempt.status === "pending") {
      // TODO use long polling when seam connect supports long polling
      actionAttempt = await this.actionAttempts.get(
        actionAttempt.action_attempt_id
      )
      if (actionAttempt.status !== "pending") break
      await new Promise((resolve) => setTimeout(resolve, 250))
    }
    return actionAttempt as SuccessfulActionAttempt<T>
  }

  private async makeRequestAndFormat<T extends keyof SeamObjectTypeMap>(
    innerObjectName: T,
    request: AxiosRequestConfig
  ): Promise<SeamObjectTypeMap[T]> {
    const res = await this.makeRequest(request)
    return this.formatResponse(innerObjectName, res)
  }

  private async makeActionAttemptRequest<
    T extends ActionType,
    K extends keyof SeamObjectTypeMap
  >(
    innerObjectName: K | null,
    request: AxiosRequestConfig
  ): Promise<SeamObjectTypeMap[K]> {
    const pendingActionAttempt = await this.makeRequestAndFormat(
      "action_attempt",
      request
    )
    const successfulActionAttempt = await this.awaitActionAttempt<T>(
      pendingActionAttempt
    )
    console.log({ successfulActionAttempt })
    if (innerObjectName === null) return successfulActionAttempt.result as any
    return (successfulActionAttempt as any).result[innerObjectName]
  }

  public readonly workspaces = {
    list: () =>
      this.makeRequestAndFormat("workspaces", {
        url: "/workspaces/list",
      }),
    get: () =>
      this.makeRequestAndFormat("workspace", {
        url: "/workspaces/get",
      }),
    resetSandbox: () =>
      this.makeRequest({
        url: "/workspaces/reset_sandbox",
        method: "POST",
      }),
  }

  public readonly locks = {
    list: (connectedAccountId?: string) =>
      this.makeRequestAndFormat("locks", {
        url: "/locks/list",
        params: connectedAccountId
          ? {
              connected_account_id: connectedAccountId,
            }
          : {},
      }),
    get: (deviceId: string) =>
      this.makeRequestAndFormat("lock", {
        url: "/locks/get",
        params: {
          device_id: deviceId,
        },
      }),
    lockDoor: (deviceId: string) =>
      this.makeActionAttemptRequest(null, {
        url: "/locks/lock_door",
        data: {
          device_id: deviceId,
        },
        method: "POST",
      }),
    unlockDoor: (deviceId: string) =>
      this.makeActionAttemptRequest(null, {
        url: "/locks/unlock_door",
        data: {
          device_id: deviceId,
        },
        method: "POST",
      }),
  }

  public readonly devices = {
    list: (connectedAccountId?: string) =>
      this.makeRequestAndFormat("devices", {
        url: "/devices/list",
        params: connectedAccountId
          ? {
              connected_account_id: connectedAccountId,
            }
          : {},
      }),
    get: (deviceId: string) =>
      this.makeRequestAndFormat("device", {
        url: "/devices/get",
        params: {
          device_id: deviceId,
        },
      }),
  }

  public readonly connectWebviews = {
    list: () =>
      this.makeRequestAndFormat("connect_webviews", {
        url: "/connect_webviews/list",
      }),
    get: (connectWebviewId: string) =>
      this.makeRequestAndFormat("connect_webview", {
        url: "/connect_webviews/get",
        params: {
          connect_webview_id: connectWebviewId,
        },
      }),
    create: (params: ConnectWebviewCreateRequest) =>
      this.makeRequestAndFormat("connect_webview", {
        url: "/connect_webviews/create",
        method: "POST",
        data: params,
      }),
  }

  public readonly accessCodes = {
    list: (params: { device_id?: string } = {}) =>
      this.makeRequestAndFormat("access_codes", {
        url: "/access_codes/list",
        params,
      }),

    create: async (params: AccessCodeCreateRequest) => {
      const parsedParams: any = Object.assign({}, params)

      if (
        typeof (params as AccessCodeCreateScheduledRequest).starts_at ===
        "object"
      ) {
        parsedParams.starts_at = (
          (params as AccessCodeCreateScheduledRequest).starts_at as Date
        ).toISOString()
      }

      if (
        typeof (params as AccessCodeCreateScheduledRequest).ends_at === "object"
      ) {
        parsedParams.ends_at = (
          (params as AccessCodeCreateScheduledRequest).ends_at as Date
        ).toISOString()
      }

      return await this.makeActionAttemptRequest("access_code", {
        url: "/access_codes/create",
        method: "POST",
        data: parsedParams,
      })
    },

    delete: (params: AccessCodeDeleteRequest) =>
      this.makeActionAttemptRequest(null, {
        url: "/access_codes/delete",
        method: "POST",
        data: params,
      }),
  }

  public readonly connectedAccounts = {
    list: () =>
      this.makeRequestAndFormat("connected_accounts", {
        url: "/connected_accounts/list",
      }),

    get: (connectedAccountId: string) =>
      this.makeRequestAndFormat("connected_account", {
        url: "/connected_accounts/get",
        params: {
          connected_account_id: connectedAccountId,
        },
      }),
  }

  public readonly actionAttempts = {
    get: (actionAttemptId: string) =>
      this.makeRequestAndFormat("action_attempt", {
        url: "/action_attempts/get",
        params: {
          action_attempt_id: actionAttemptId,
        },
      }),
  }
}
