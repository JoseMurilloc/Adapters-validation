import { ICreateUserDTO } from "../../../../useCases/User/CreateUser/ICreateUserDTO";

export interface IValidateUserProtocol {
  createUserValidate(data: ICreateUserDTO) : boolean;
  sessionUserValidate(data: any): Promise<any>;
}
