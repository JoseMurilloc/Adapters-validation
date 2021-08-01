import { ICreateSessionDTO } from "@useCases/User/CreateSession/ICreateSessionDTO";
import { ICreateUserDTO } from "@useCases/User/CreateUser/ICreateUserDTO";
import { ValidateJSAdapter } from "./adpaterImplementation/ValidateJSAdapter";
import { YupAdapter } from "./adpaterImplementation/YupAdapter";
import { IValidateUserProtocol } from "./protocol/IValidateUserProtocol";

export class Validate implements IValidateUserProtocol {
  constructor(
    private validateAdapter: YupAdapter
  ) {}

  async createUserValidate(data: ICreateUserDTO): Promise<void> {
    return this.validateAdapter.createUserValidate(data)
  }
  async createSessionValidate(data: ICreateSessionDTO): Promise<void> {
    return this.validateAdapter.createSessionValidate(data)
  }
}
