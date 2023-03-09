export interface APIErrorResponse {
  type: string
  message: string
  data?: any
}

export type SuccessfulAPIResponse<T> = T & {
  ok: true
}

export interface ErroredAPIResponse {
  ok: false
  error: APIErrorResponse
}

export type APIResponse<T> = SuccessfulAPIResponse<T> | ErroredAPIResponse

export type CustomMetadata = Record<string, string | number | boolean | null>
