import { ICreateSessionDTO } from "@useCases/User/CreateSession/ICreateSessionDTO";
import { ICreateUserDTO } from "@useCases/User/CreateUser/ICreateUserDTO";

export interface IValidateUserProtocol {
  createUserValidate(data: ICreateUserDTO) : void;
  createSessionValidate(data: ICreateSessionDTO): void;
}
