export type Errors = {
  [key: string]: string[]
}

export class AppValidateError extends Error {
  constructor(
    public errors: Errors,
    public statusCode = 400
  ) {
    super()
  }
}
