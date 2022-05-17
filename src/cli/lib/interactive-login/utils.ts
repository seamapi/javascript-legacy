export const formatErrorMsg = (errorMsg: string) => {
  return `⚠️  ${errorMsg}`
}

export class ContinueOutsideCLIError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "ContinueOutsideCLIError"
  }
}
