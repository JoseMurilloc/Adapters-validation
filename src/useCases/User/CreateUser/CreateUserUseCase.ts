import { IUserRepository } from "@repositories/user/IUserRepository";
import { User } from "../../../entities/User";
import { ICreateUserDTO } from "./ICreateUserDTO";
import { Crypt } from "@adapters/crypt";
import { AppError } from "@errors/AppError";

class CreateUserUseCase {

  constructor(
    private userRepository: IUserRepository,
    private crypt: Crypt,
  ) { }

  async execute(data: ICreateUserDTO) {

    const userAlreadyExists = await this.userRepository.findByEmail(data.email);

    if (userAlreadyExists) {
      throw new AppError('User already exists.');
    }

    const { password, name, email } = data

    const hashPassword = await this.crypt.hashPassword(password, 8)

    const user = new User({
      email,
      password: hashPassword,
      name,
    });

    await this.userRepository.save(user)

    return {
      name: user.name,
      email: user.email,
    }
  }
}

export { CreateUserUseCase }
