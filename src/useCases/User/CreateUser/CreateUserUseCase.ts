import { IUserRepository } from "../../../repositories/user/IUserRepository";
import { User } from "../../../entities/User";
import { ICreateUserDTO } from "./ICreateUserDTO";
import { ValidateJSUserAdapter } from "../../../adapters/validate/user/adpaterImplementation/ValidateJSUserAdapter";
import AppError from "../../../errors/AppError";
import { Crypt } from "../../../adapters/crypt";

class CreateUserUseCase {

  constructor(
    private userRepository: IUserRepository,
    private validateAdapter: ValidateJSUserAdapter,
    private cryptAdapter: Crypt
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
