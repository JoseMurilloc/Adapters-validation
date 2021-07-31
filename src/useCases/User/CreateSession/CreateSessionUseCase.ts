import { IUserRepository } from "@repositories/user/IUserRepository";
import { ICreateSessionDTO } from "./ICreateSessionDTO";

class CreateSessionUseCase {

  constructor(
    private userRepository: IUserRepository,
  ) { }

  async execute(data: ICreateSessionDTO) {}
}

export { CreateSessionUseCase }
