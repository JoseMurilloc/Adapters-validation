import { ICreateSessionDTO } from "@useCases/User/CreateSession/ICreateSessionDTO";
import { ICreateUserDTO } from "@useCases/User/CreateUser/ICreateUserDTO";
import { ValidateJSAdapter } from "./adpaterImplementation/ValidateJSAdapter";
import { IValidateUserProtocol } from "./protocol/IValidateUserProtocol";

export class Validate implements IValidateUserProtocol {
  constructor(
    private validateJSAdapter: ValidateJSAdapter
  ) {}

  createUserValidate(data: ICreateUserDTO): void {
    this.validateJSAdapter.createUserValidate(data)
  }
  createSessionValidate(data: ICreateSessionDTO): void {
    this.validateJSAdapter.createSessionValidate(data)
  }
}
