import { ICreateSessionDTO } from "@useCases/User/CreateSession/ICreateSessionDTO";
import { ICreateUserDTO } from "@useCases/User/CreateUser/ICreateUserDTO";
import { ValidateJSAdapter } from "./adpaterImplementation/ValidateJSAdapter";
import { IValidateUserProtocol } from "./protocol/IValidateUserProtocol";

export class Validate implements IValidateUserProtocol {
  constructor(
    private validateJSAdapter: ValidateJSAdapter
  ) {}

  createUserValidate(data: ICreateUserDTO): boolean {
    return this.validateJSAdapter.createUserValidate(data)
  }
  createSessionValidate(data: ICreateSessionDTO): boolean {
    return this.validateJSAdapter.createSessionValidate(data)
  }
}
