import { ICreateUserDTO } from "./ICreateUserDTO";

export class CreateUserValidator {
  constructor(private user: ICreateUserDTO) {}

  public async execute(userValidator: ICreateUserDTO) {

  }
}

