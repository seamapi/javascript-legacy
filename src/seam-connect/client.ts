import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
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
import { ClientSession, ClientSessionResponse } from "../types"

export interface SeamClientOptions {
  /* Seam API Key */
  apiKey?: string
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

const getAuthHeaders = ({
  clientSessionToken,
  apiKey,
  workspaceId,
}: {
  clientSessionToken?: string
  apiKey?: string
  workspaceId?: string
}): Record<string, string> => {
  if (apiKey && clientSessionToken) {
    throw new Error("You can't use clientSessionToken AND specify apiKey.")
  }

  if (clientSessionToken) {
    if (!clientSessionToken.startsWith("seam_cst")) {
      throw new Error("clientSessionToken must start with seam_cst")
    }
    return { "client-session-token": clientSessionToken }
  }

  if (apiKey) {
    if (apiKey.startsWith("seam_cst")) {
      console.warn(
        "Using API Key as Client Session Token is deprecated. Please use the clientSessionToken option instead."
      )
      return { "client-session-token": apiKey }
    }
    if (!apiKey.startsWith("seam_at") && workspaceId)
      throw new Error(
        "You can't use API Key Authentication AND specify a workspace. Your API Key only works for the workspace it was created in. To use Session Key Authentication with multi-workspace support, contact Seam support."
      )
    return { authorization: `Bearer ${apiKey}` }
  }
  throw new Error(
    "Must provide either clientSessionToken or apiKey (API Key or Access Token with Workspace ID)."
  )
}

export class Seam extends Routes {
  public client: AxiosInstance

  constructor(apiKeyOrOptions?: string | SeamClientOptions) {
    super()

    const { apiKey, endpoint, workspaceId, axiosOptions, clientSessionToken } =
      getSeamClientOptionsWithDefaults(apiKeyOrOptions)

    const authHeaders = getAuthHeaders({
      clientSessionToken,
      apiKey,
      workspaceId,
    })

    const headers: AxiosRequestHeaders = {
      ...axiosOptions?.headers,
      ...authHeaders,
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

  static async getClientSessionToken(options: {
    publishableKey?: string
    userIdentifierKey: string
    endpoint?: string
    workspaceId?: string
    apiKey?: string
  }): Promise<APIResponse<ClientSessionResponse>> {
    const { apiKey, endpoint, axiosOptions } =
      getSeamClientOptionsWithDefaults(options)

    if (!options.userIdentifierKey) {
      throw new Error("userIdentifierKey is required")
    }

    const getKeyHeaders = (): AxiosRequestHeaders => {
      const { publishableKey } = options
      if (publishableKey) {
        if (!publishableKey.startsWith("seam_pk")) {
          throw new Error("Invalid publishableKey")
        }
        return { "seam-publishable-key": publishableKey }
      }

      if (apiKey) {
        if (!apiKey?.startsWith("seam_")) {
          throw new Error("Invalid apiKey")
        }
        return { "seam-api-key": apiKey }
      }

      throw new Error("Must provide a publishableKey or apiKey")
    }

    const headers = {
      "seam-user-identifier-key": options.userIdentifierKey,
      ...getKeyHeaders(),
      ...axiosOptions?.headers,
    }

    const client = axios.create({
      ...axiosOptions,
      baseURL: endpoint,
      headers,
    })
    try {
      const response: AxiosResponse & {
        data: { client_session: ClientSession }
      } = await client.post(
        "/internal/client_sessions/create",
        {},
        // { headers: { "seam-sdk-version": version } }
        {}
      )
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
