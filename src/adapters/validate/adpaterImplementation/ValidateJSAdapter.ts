import Validator from 'validatorjs';
import { ICreateUserDTO } from "@useCases/User/CreateUser/ICreateUserDTO";
import { IValidateUserProtocol } from "../protocol/IValidateUserProtocol";
import { ICreateSessionDTO } from "@useCases/User/CreateSession/ICreateSessionDTO";

export class ValidateJSAdapter implements IValidateUserProtocol {

  createSessionValidate(data: ICreateSessionDTO): boolean {
    const rulesCreateSession = {
      email: 'required|email',
      password: 'required|min:6|string'
    }

    const validation = new Validator(
      data,
      rulesCreateSession,
    );

    if (validation.passes()) {
      return true
    }

    return false
  }


  createUserValidate(data: ICreateUserDTO): boolean {
    const rulesCreateUser = {
      name: 'required',
      email: 'required|email',
      password: 'required|min:6'
    };

    const validation = new Validator(
      data,
      rulesCreateUser,
      { "required.password": 'You forgot to give a :attribute' }
    );

    if (validation.passes()) {
      return true
    }

    return false
  }
}
