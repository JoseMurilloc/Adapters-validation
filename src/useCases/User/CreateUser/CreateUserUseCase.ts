import { IUserRepository } from "../../../repositories/user/IUserRepository";
import { User } from "../../../entities/User";
import { ICreateUserDTO } from "./ICreateUserDTO";
import { ValidateJSAdapter } from "../../../adapters/validate/adpaterImplementation/ValidateJSAdapter";
import AppError from "../../../errors/AppError";
import { Crypt } from "../../../adapters/crypt";

class CreateUserUseCase {

  constructor(
    private userRepository: IUserRepository,
    private cryptAdapter: Crypt,
    private validateAdapter: ValidateJSAdapter,
  ) { }

  async execute(data: ICreateUserDTO) {

    const isValid = this.validateAdapter.createUserValidate({
      email: data.email,
      password: data.password,
      name: data.name,
    })

    if (!isValid) {
      throw new AppError('Data is not valid')
    }

    const userAlreadyExists = await this.userRepository.findByEmail(data.email);

    if (userAlreadyExists) {
      throw new Error('User already exists.');
    }

    const { password, name, email } = data

    const hashPassword = await this.cryptAdapter.hashPassword(password, 8)

    const user = new User({
      email,
      password: hashPassword,
      name,
    });


    await this.userRepository.save(user)
    return user
  }
}

export { CreateUserUseCase }
