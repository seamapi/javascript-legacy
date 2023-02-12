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
   * Organization if using session authentication, defaults to SEAM_ORGANIZATION_ID
   * or undefined
   **/
  organizationId?: string
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
    organizationId: process?.env?.SEAM_ORGANIZATION_ID,
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
    const { apiKey, endpoint, organizationId, axiosOptions } =
      getSeamOSClientOptionsWithDefaults(apiKeyOrOptions)

    const isRegularAPIKey = apiKey?.startsWith("seam_")

    if (isRegularAPIKey && organizationId)
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
        ...(!organizationId ? {} : { "Seam-Organization-Id": organizationId }),
      },
    })
  }

  async makeRequest<
    URL extends keyof Routes,
    Method extends Routes[URL]["method"]
  >(
    request: ExtendedAxiosRequestConfig<URL, Method>
  ): Promise<Routes[URL]["jsonResponse"]> {
    const res = await this.axios.request(request)
    return res.data
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
    return this.makeRequest({ url, method: "POST", data, ...config })
  }

  private _curriedPost =
    <URL extends keyof Routes>(url: URL) =>
    (
      data: ExtendedAxiosRequestConfig<URL, "POST">["data"]
    ): Promise<Routes[URL]["jsonResponse"]> => {
      return this.post(url, data)
    }

  private _postGrab =
    <
      URL extends keyof Routes,
      InnerObject extends keyof Routes[URL]["jsonResponse"]
    >(
      url: URL,
      innerObject: InnerObject
    ) =>
    async (
      data: ExtendedAxiosRequestConfig<URL, "POST">["data"]
    ): Promise<Routes[URL]["jsonResponse"][InnerObject]> => {
      const res = await this.post(url, data)
      return res[innerObject]
    }

  private _getGrab =
    <
      URL extends keyof Routes,
      InnerObject extends keyof Routes[URL]["jsonResponse"]
    >(
      url: URL,
      innerObject: InnerObject
    ) =>
    async (
      data: ExtendedAxiosRequestConfig<URL, "GET">["data"]
    ): Promise<Routes[URL]["jsonResponse"][InnerObject]> => {
      const res = await this.post(url, data)
      return res[innerObject]
    }

  private _curriedGet =
    <URL extends keyof Routes>(url: URL) =>
    (
      data: ExtendedAxiosRequestConfig<URL, "POST">["data"]
    ): Promise<Routes[URL]["jsonResponse"]> => {
      return this.post(url, data)
    }

  public readonly organizations = {
    get: this._getGrab("/organizations/get", "organization"),
    list: this._getGrab("/organizations/list", "organizations"),
    create: this._postGrab("/organizations/create", "organization"),
    invite_user: this._curriedPost("/organizations/invite_user"),
    remove_user: this._curriedPost("/organizations/remove_user"),
    update: this._curriedPost("/organizations/update"),
  }

  public health = this._curriedGet("/health")

  public readonly access_codes = {
    create: this._postGrab("/access_codes/create", "access_code"),
    get: this._getGrab("/access_codes/get", "access_code"),
    list: this._getGrab("/access_codes/list", "access_codes"),
    delete: this._curriedPost("/access_codes/delete"),
    update: this._curriedPost("/access_codes/update"),
  }

  public readonly access_passes = {
    create: this._postGrab("/access_passes/create", "access_pass"),
    get: this._getGrab("/access_passes/get", "access_pass"),
    get_count_summary: this._getGrab(
      "/access_passes/get_count_summary",
      "access_pass_counts"
    ),
    list: this._getGrab("/access_passes/list", "access_passes"),
    delete: this._curriedPost("/access_passes/delete"),
    // update: this._curriedPost("/access_passes/update"),
  }

  public readonly buildings = {
    create: this._postGrab("/buildings/create", "building"),
    get: this._getGrab("/buildings/get", "building"),
    get_count_summary: this._getGrab(
      "/buildings/get_count_summary",
      "building_count_summary"
    ),
    list_count_summaries: this._getGrab(
      "/buildings/list_count_summaries",
      "building_count_summaries"
    ),
    list: this._getGrab("/buildings/list", "buildings"),
    delete: this._curriedPost("/buildings/delete"),
    update: this._curriedPost("/buildings/update"),
    add_device: this._curriedPost("/buildings/add_device"),
    add_user: this._curriedPost("/buildings/add_user"),
  }

  public readonly events = {
    list: this._getGrab("/events/list", "events"),
  }

  public readonly device_groups = {
    create: this._postGrab("/device_groups/create", "device_group"),
    get: this._getGrab("/device_groups/get", "device_group"),
    list: this._getGrab("/device_groups/list", "device_groups"),
    delete: this._curriedPost("/device_groups/delete"),
    update: this._curriedPost("/device_groups/update"),
    // woops need to add
    // add_device: this._curriedPost("/device_groups/add_device"),
    // remove_device: this._curriedPost("/device_groups/remove_device"),
  }

  public readonly devices = {
    get: this._getGrab("/devices/get", "device"),
    list_counts: this._getGrab("/devices/list_counts", "device_counts"),
    list: this._getGrab("/devices/list", "devices"),
    delete: this._curriedPost("/devices/delete"),
    update: this._curriedPost("/devices/update"),
    get_count_summary: this._getGrab(
      "/devices/get_count_summary",
      "device_count_summary"
    ),
  }

  public readonly incidents = {
    list: this._getGrab("/incidents/list", "incidents"),
  }

  public readonly linked_accounts = {
    get: this._getGrab("/linked_accounts/get", "linked_account"),
    list: this._getGrab("/linked_accounts/list", "linked_accounts"),
  }

  public readonly locks = {
    lock: this._curriedPost("/locks/lock"),
    unlock: this._curriedPost("/locks/unlock"),
  }

  public readonly login_portals = {
    create: this._postGrab("/login_portals/create", "login_portal"),
    get: this._getGrab("/login_portals/get", "login_portal"),
    delete: this._curriedPost("/login_portals/delete"),
  }

  public readonly user_groups = {
    create: this._postGrab("/user_groups/create", "user_group"),
    get: this._getGrab("/user_groups/get", "user_group"),
    list: this._getGrab("/user_groups/list", "user_groups"),
    update: this._curriedPost("/user_groups/update"),
    delete: this._curriedPost("/user_groups/delete"),
    add_user: this._curriedPost("/user_groups/add_user"),
    remove_user: this._curriedPost("/user_groups/remove_user"),
  }

  public readonly users = {
    get: this._getGrab("/users/get", "user"),
    list: this._getGrab("/users/list", "users"),
    update: this._curriedPost("/users/update"),
    delete: this._curriedPost("/users/delete"),
  }
}
