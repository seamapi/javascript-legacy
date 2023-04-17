import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
} from "axios"
import axiosRetry from "axios-retry"
import { SeamAPIError, SeamMalformedInputError } from "../lib/api-error"
import { Routes } from "./routes"
import {
  APIResponse,
  ErroredAPIResponse,
  SuccessfulAPIResponse,
} from "../types/globals"
import { version } from "../../package.json"
import { ClientSessionResponse } from "../types"

export interface SeamClientOptions {
  /* Seam API Key */
  apiKey?: string
  /* Seam Client Access Token */
  clientAccessToken?: string
  /* Seam Client Session Token */
  clientSessionToken?: string
  /**
   * Seam Endpoint to use, defaults to https://connect.getseam.com
   **/
  endpoint?: string
  /**
   * Workspace if using session authentication, defaults to SEAM_WORKSPACE_ID
   * or undefined
   **/
  workspaceId?: string
  /**
   * Extended options to pass to Axios
   */
  axiosOptions?: AxiosRequestConfig
}

export const getSeamClientOptionsWithDefaults = (
  apiKeyOrOptions?: string | SeamClientOptions
): SeamClientOptions => {
  let seamClientDefaults: SeamClientOptions = {}
  try {
    // try to get defaults from environment (for server-side use)
    seamClientDefaults = {
      apiKey: process?.env?.SEAM_API_KEY,
      endpoint: process?.env?.SEAM_API_URL || "https://connect.getseam.com",
      workspaceId: process?.env?.SEAM_WORKSPACE_ID,
    }
  } catch (error) {
    // we are in a browser, so use the apiKeyOrOptions
    // do nothing
  }
  if (typeof apiKeyOrOptions === "string") {
    // for both browser and server, if apiKeyOrOptions is a string, use it as the apiKey, and merge with defaults
    return { ...seamClientDefaults, apiKey: apiKeyOrOptions }
  } else {
    return { ...seamClientDefaults, ...apiKeyOrOptions }
  }
}

export class Seam extends Routes {
  public client: AxiosInstance

  constructor(apiKeyOrOptions?: string | SeamClientOptions) {
    super()

    const {
      apiKey,
      endpoint,
      workspaceId,
      axiosOptions,
      clientAccessToken,
      clientSessionToken,
    } = getSeamClientOptionsWithDefaults(apiKeyOrOptions)
    let bearer = `Bearer `
    if (
      (clientSessionToken && clientSessionToken?.startsWith("seam_cst")) ||
      (apiKey && apiKey.startsWith("seam_cst"))
    ) {
      bearer += clientSessionToken || apiKey
    } else if (clientAccessToken && clientAccessToken?.startsWith("seam_at")) {
      bearer += clientAccessToken
    } else {
      const isRegularAPIKey = apiKey?.startsWith("seam_")
      if (isRegularAPIKey && workspaceId)
        throw new Error(
          "You can't use API Key Authentication AND specify a workspace. Your API Key only works for the workspace it was created in. To use Session Key Authentication with multi-workspace support, contact Seam support."
        )
      if (!apiKey) {
        throw new Error(
          "SEAM_API_KEY not found in environment, and apiKey not provided"
        )
      }
      bearer += apiKey
    }
    const headers: AxiosRequestHeaders = {
      ...axiosOptions?.headers,
      Authorization: bearer,
      ...(!workspaceId ? {} : { "Seam-Workspace": workspaceId }), // only needed for session key authentication
      // 'seam-sdk-version': version // TODO: resolve error Access to XMLHttpRequest at 'http://localhost:3020/devices/list' from origin 'http://localhost:5173' has been blocked by CORS policy: Request header field seam-sdk-version is not allowed by Access-Control-Allow-Headers in preflight response.
    }
    if (typeof window === "undefined") {
      headers[
        "User-Agent"
      ] = `Javascript SDK v${version}, Node.js mode, (https://github.com/seamapi/javascript)`
    }
    this.client = axios.create({
      ...axiosOptions,
      baseURL: endpoint,
      headers,
    })

    axiosRetry(this.client, {
      retries: 2,
      retryDelay: axiosRetry.exponentialDelay,
    })
  }

  public async makeRequest<T>(
    request: AxiosRequestConfig
  ): Promise<SuccessfulAPIResponse<T>> {
    try {
      const response = await this.client.request(request)
      return response.data
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.data.error?.type === "invalid_input") {
          throw new SeamMalformedInputError(
            error.response.data.error.validation_errors
          )
        }

        throw new SeamAPIError(
          error.response.status,
          error.response.headers["seam-request-id"],
          (error.response.data as ErroredAPIResponse).error
        )
      }

      throw error
    }
  }

  static async getClientSessionToken(
    ops: CSTParams
  ): Promise<APIResponse<ClientSessionResponse>> {
    let headers: AxiosRequestHeaders = {}

    if (ops.publishedKey?.startsWith("seam_pk")) {
      // frontend mode
      headers["seam-publishable-key"] = ops.publishedKey
    } else if (ops.apiKey?.startsWith("seam_")) {
      // backend mode
      headers["seam-api-key"] = ops.apiKey
    }
    headers["seam-user-identifier-key"] = ops.userIdentifierKey

    try {
      const response = await axios.post(
        ops.endpoint + "internal/client_sessions/create",
        {},
        { headers }
      )
      if (response.data.error) {
        return {
          ok: false,
          error: {
            type: response.data.error.type,
            message: response.data.error.message,
          },
        }
      }
      return await response.data
    } catch (error: any) {
      throw new SeamAPIError(
        error.response.status,
        error.response.headers["seam-request-id"],
        (error.response.data as ErroredAPIResponse).error
      )
    }
  }
}

type CSTParams = {
  publishedKey?: string
  userIdentifierKey: string
  endpoint: string
  workspaceId?: string
  apiKey?: string
}
