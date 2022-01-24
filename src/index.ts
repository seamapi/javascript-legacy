import axios, { AxiosInstance, AxiosRequestConfig } from "axios"
import { SeamAPIError } from "./lib/api-error"
import { Routes } from "./routes"
import {
  APIResponse,
  ErroredAPIResponse,
  SuccessfulAPIResponse,
} from "./types/globals"

class Seam extends Routes {
  private endpoint = "https://connect.getseam.com"
  private apiKey: string
  private client: AxiosInstance

  constructor(apiKey?: string) {
    super()

    if (!apiKey) {
      apiKey = process.env.SEAM_API_KEY
    }

    if (!apiKey) {
      throw new Error(
        "SEAM_API_KEY not found in environment, and apiKey not provided"
      )
    }

    this.apiKey = apiKey

    this.client = axios.create({
      baseURL: this.endpoint,
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
      },
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
        throw new SeamAPIError(
          error.response.status,
          (error.response.data as ErroredAPIResponse).error
        )
      }

      throw error
    }
  }
}

export default Seam

export { SeamAPIError }
