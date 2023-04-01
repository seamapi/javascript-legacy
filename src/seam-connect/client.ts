import axios, { AxiosInstance, AxiosRequestConfig } from "axios"
import axiosRetry from "axios-retry"
import { SeamAPIError, SeamMalformedInputError } from "../lib/api-error"
import { Routes } from "./routes"
import {
  APIResponse,
  ErroredAPIResponse,
  SuccessfulAPIResponse,
} from "../types/globals"
import { version } from "../../package.json"
import { ClientAccessTokenResponseInterface } from "../types"

export interface SeamClientOptions {
  /* Seam API Key */
  apiKey?: string
  /* Seam Client Access Token */
  clientAccessToken?: string
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

    const { apiKey, endpoint, workspaceId, axiosOptions, clientAccessToken } =
      getSeamClientOptionsWithDefaults(apiKeyOrOptions)

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

    this.client = axios.create({
      ...axiosOptions,
      baseURL: endpoint,
      headers: {
        ...axiosOptions?.headers,
        Authorization: `Bearer ${apiKey || clientAccessToken}`,
        // ["User-Agent"]: `Javascript SDK v${version} (https://github.com/seamapi/javascript)`,

        // only needed for session key authentication
        ...(!workspaceId ? {} : { "Seam-Workspace": workspaceId }),
      },
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
  static async getClientAccessToken(
    pubKey: string,
    extHostUserId: string,
    endpoint: string,
    workspaceId?: string
  ): Promise<APIResponse<ClientAccessTokenResponseInterface>> {
    const response = await axios.post(
      endpoint + "internal/client_access_tokens/create",
      {
        pub_key: pubKey,
        ext_host_user_id: extHostUserId,
        workspace_id: workspaceId,
      }
    )
    return await response.data
  }
}
