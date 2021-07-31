import Validator from 'validatorjs';
import { ICreateUserDTO } from "@useCases/User/CreateUser/ICreateUserDTO";
import { IValidateUserProtocol } from "../protocol/IValidateUserProtocol";
import { ICreateSessionDTO } from "@useCases/User/CreateSession/ICreateSessionDTO";
import { AppError } from '@errors/AppError';
import { AppValidateError, Errors } from '@errors/AppValidateError';

export class ValidateJSAdapter implements IValidateUserProtocol {

  async createSessionValidate(data: ICreateSessionDTO): Promise<void> {
    const rulesCreateSession = {
      email: 'required|email',
      password: 'required|min:6|string'
    }

    const validation = new Validator(
      data,
      rulesCreateSession,
    );

    if (!validation.passes()) {
      throw new AppValidateError(validation.errors.errors)
    }
  }


  async createUserValidate(data: ICreateUserDTO): Promise<void> {
    const rulesCreateUser = {
      name: 'required|min:6',
      email: 'required|email',
      password: 'required|min:6'
    };

    const validation = new Validator(
      data,
      rulesCreateUser,
    );

    if (!validation.passes()) {
      throw new AppValidateError(validation.errors.errors)
    }
  }
}
