import axios, { AxiosInstance, AxiosRequestConfig } from "axios"
import { SeamAPIError } from "./lib/api-error"
import { Routes } from "./routes"
import { ErroredAPIResponse, SuccessfulAPIResponse } from "./types/globals"

class Seam extends Routes {
  private client: AxiosInstance

  constructor(
    apiKey?: string,
    endpoint = process.env.SEAM_API_URL || "https://connect.getseam.com"
  ) {
    super()

    if (!apiKey) {
      apiKey = process.env.SEAM_API_KEY
    }

    if (!apiKey) {
      throw new Error(
        "SEAM_API_KEY not found in environment, and apiKey not provided"
      )
    }

    this.client = axios.create({
      baseURL: endpoint,
      headers: {
        Authorization: `Bearer ${apiKey}`,
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

export * from "./types/globals"
export * from "./types/models"
export * from "./types/route-requests"
export * from "./types/route-responses"
export * from "./lib/api-error"
