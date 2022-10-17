import axios, { AxiosInstance, AxiosRequestConfig } from "axios"
import axiosRetry from "axios-retry"
import * as Sentry from "@sentry/node"
import { SeamAPIError, SeamMalformedInputError } from "./lib/api-error"
import { Routes } from "./routes"
import { ErroredAPIResponse, SuccessfulAPIResponse } from "./types/globals"
import { version, repository } from "../package.json"

export interface SeamClientOptions {
  /* Seam API Key */
  apiKey?: string
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
   * If true, SDK exceptions will be automatically reported to Seam. This defaults to `false` and is opt-in.
   * @default false
   */
  shouldReportExceptions?: boolean
  /**
   * Extended options to pass to Axios
   */
  axiosOptions?: AxiosRequestConfig
}

export const getSeamClientOptionsWithDefaults = (
  apiKeyOrOptions?: string | SeamClientOptions
): SeamClientOptions => {
  const seamClientDefaults: SeamClientOptions = {
    apiKey: process?.env?.SEAM_API_KEY,
    endpoint: process?.env?.SEAM_API_URL || "https://connect.getseam.com",
    workspaceId: process?.env?.SEAM_WORKSPACE_ID,
    shouldReportExceptions: false,
  }
  if (typeof apiKeyOrOptions === "string") {
    return { ...seamClientDefaults, apiKey: apiKeyOrOptions }
  } else {
    return { ...seamClientDefaults, ...apiKeyOrOptions }
  }
}

export class Seam extends Routes {
  public client: AxiosInstance
  private shouldReportExceptions: boolean

  constructor(apiKeyOrOptions?: string | SeamClientOptions) {
    super()

    const {
      apiKey,
      endpoint,
      workspaceId,
      axiosOptions,
      shouldReportExceptions,
    } = getSeamClientOptionsWithDefaults(apiKeyOrOptions)

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
        Authorization: `Bearer ${apiKey}`,
        ["User-Agent"]: `Javascript SDK v${version} (${repository})`,

        // only needed for session key authentication
        ...(!workspaceId ? {} : { "Seam-Workspace": workspaceId }),
      },
    })

    axiosRetry(this.client, {
      retries: 2,
      retryDelay: axiosRetry.exponentialDelay,
    })

    this.shouldReportExceptions = shouldReportExceptions ?? false
    if (this.shouldReportExceptions) {
      Sentry.init({
        // Replaced during build
        dsn: process.env.SENTRY_DSN,
        defaultIntegrations: false,
      })

      Sentry.setContext("sdk_info", {
        repository,
        version,
        endpoint,
      })
    }
  }

  public async makeRequest<T>(
    request: AxiosRequestConfig
  ): Promise<SuccessfulAPIResponse<T>> {
    return await this.wrapThrowable(async () => {
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
    })
  }

  /**
   * Reports thrown exceptions to Sentry, if enabled.
   */
  private async wrapThrowable<T>(fn: () => T): Promise<T> {
    try {
      return await fn()
    } catch (error) {
      if (
        this.shouldReportExceptions &&
        // Only capture unknown errors
        !(
          error instanceof SeamMalformedInputError ||
          error instanceof SeamAPIError
        )
      ) {
        Sentry.captureException(error)
      }

      throw error
    }
  }
}
