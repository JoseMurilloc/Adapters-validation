type Errors = {
  [key: string]: string[]
}


export class AppValidateError {
  public readonly errors : Errors;
  public readonly statusCode : number;

  constructor(errors: Errors, statusCode = 400) {
    this.errors = errors;
    this.statusCode = statusCode;
  }
}
