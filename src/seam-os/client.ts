import { AxiosRequestConfig, AxiosInstance } from "axios"
import { RouteRequestBody, RouteRequestParams, Routes } from "./routes"
import defaultAxios from "axios"
import { version } from "../../package.json"

export interface SeamOSClientOptions {
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
   * Extended options to pass to Axios
   */
  axiosOptions?: AxiosRequestConfig
}

export const getSeamOSClientOptionsWithDefaults = (
  apiKeyOrOptions?: string | SeamOSClientOptions
): SeamOSClientOptions => {
  const seamClientDefaults: SeamOSClientOptions = {
    apiKey: process?.env?.SEAM_API_KEY,
    endpoint: process?.env?.SEAM_API_URL || "https://example.com",
    workspaceId: process?.env?.SEAM_WORKSPACE_ID,
  }
  if (typeof apiKeyOrOptions === "string") {
    return { ...seamClientDefaults, apiKey: apiKeyOrOptions }
  } else {
    return { ...seamClientDefaults, ...apiKeyOrOptions }
  }
}

export interface ExtendedAxiosRequestConfig<
  URL extends keyof Routes,
  Method extends Routes[URL]["method"]
> extends Omit<AxiosRequestConfig, "url" | "method" | "data"> {
  url: URL
  method: Method
  params?: RouteRequestParams<URL>
  data?: RouteRequestBody<URL>
}

export class SeamOS {
  axios: AxiosInstance

  constructor(apiKeyOrOptions?: string | SeamOSClientOptions) {
    const { apiKey, endpoint, workspaceId, axiosOptions } =
      getSeamOSClientOptionsWithDefaults(apiKeyOrOptions)

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

    this.axios = defaultAxios.create({
      ...axiosOptions,
      baseURL: endpoint,
      headers: {
        ...axiosOptions?.headers,
        Authorization: `Bearer ${apiKey}`,
        ["User-Agent"]: `Javascript SDK v${version} (https://github.com/seamapi/javascript)`,

        // only needed for session key authentication
        ...(!workspaceId ? {} : { "Seam-Workspace": workspaceId }),
      },
    })
  }

  makeRequest<URL extends keyof Routes, Method extends Routes[URL]["method"]>(
    request: ExtendedAxiosRequestConfig<URL, Method>
  ): Promise<Routes[URL]["jsonResponse"]> {
    return null as any
  }

  get<URL extends keyof Routes>(
    url: URL,
    config?: ExtendedAxiosRequestConfig<URL, "GET">
  ): Promise<Routes[URL]["jsonResponse"]> {
    return this.makeRequest({ url, method: "GET", ...config })
  }

  post<URL extends keyof Routes>(
    url: URL,
    data: ExtendedAxiosRequestConfig<URL, "POST">["data"],
    config?: ExtendedAxiosRequestConfig<URL, "POST">
  ): Promise<Routes[URL]["jsonResponse"]> {
    return this.makeRequest({ url, method: "POST", ...config })
  }

  public readonly organizations = {
    get: () => this.get("/organizations/get"),
  }
}
