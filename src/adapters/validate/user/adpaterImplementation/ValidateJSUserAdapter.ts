import {
  ICreateUserDTO
} from "../../../../useCases/User/CreateUser/ICreateUserDTO";
import { IValidateUserProtocol } from "../protocol/IValidateUserProtocol";
import Validator from 'validatorjs';


export class ValidateJSUserAdapter implements IValidateUserProtocol {

  private rulesCreateUser = {
    name: 'required',
    email: 'required|email',
    password: 'required|min:6'
  };

  sessionUserValidate(data: any): Promise<any> {
    throw new Error("Method not implemented.");
  }


  createUserValidate(data: ICreateUserDTO): boolean {
    const validation = new Validator(data, this.rulesCreateUser);

    if (validation.passes()) {
      return true
    }

    return false
  }
}
