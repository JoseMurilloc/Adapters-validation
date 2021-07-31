import { Errors } from "@errors/AppValidateError";
import { ICreateSessionDTO } from "@useCases/User/CreateSession/ICreateSessionDTO";
import { ICreateUserDTO } from "@useCases/User/CreateUser/ICreateUserDTO";

export interface IValidateUserProtocol {
  createUserValidate(data: ICreateUserDTO) : Promise<void>;
  createSessionValidate(data: ICreateSessionDTO): Promise<void>;
}
