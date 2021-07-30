import { IUserRepository } from "@repositories/user/IUserRepository";
import { User } from "../../../entities/User";
import { ICreateUserDTO } from "./ICreateUserDTO";
import { Validate } from "@adapters/validate";
import { Crypt } from "@adapters/crypt";

class CreateUserUseCase {

  constructor(
    private userRepository: IUserRepository,
    private crypt: Crypt,
    private validate: Validate,
  ) { }

  async execute(data: ICreateUserDTO) {

    this.validate.createUserValidate({
      email: data.email,
      password: data.password,
      name: data.name,
    })


    const userAlreadyExists = await this.userRepository.findByEmail(data.email);

    if (userAlreadyExists) {
      throw new Error('User already exists.');
    }

    const { password, name, email } = data

    const hashPassword = await this.crypt.hashPassword(password, 8)

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
