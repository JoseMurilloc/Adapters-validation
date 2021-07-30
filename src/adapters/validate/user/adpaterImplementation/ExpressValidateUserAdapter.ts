import { ICreateUserDTO } from "src/useCases/User/CreateUser/ICreateUserDTO";
import { IValidateUserProtocol } from "../protocol/IValidateUserProtocol";

export class ExpressValidateUserAdapter implements IValidateUserProtocol {
  createUserValidate(data: ICreateUserDTO): boolean {
    throw new Error("Method not implemented.");
  }
  sessionUserValidate(data: any): Promise<any> {
    throw new Error("Method not implemented.");
  }

}
