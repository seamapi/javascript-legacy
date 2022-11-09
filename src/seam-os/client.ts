import { AxiosRequestConfig, AxiosInstance } from "axios"
import { Routes } from "./routes"

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
  data?: Method extends "GET"
    ? Routes[URL]["queryParams"] & Routes[URL]["commonParams"]
    : Routes[URL]["jsonBody"] & Routes[URL]["commonParams"]
}

export class SeamOS {
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
}
