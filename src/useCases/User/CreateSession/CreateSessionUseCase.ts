import { IUserRepository } from "@repositories/user/IUserRepository";
import { User } from "../../../entities/User";
import { ICreateSessionDTO } from "./ICreateSessionDTO";
import {AppError} from "@errors/AppError";

class CreateSessionUseCase {

  constructor(
    private userRepository: IUserRepository,
  ) { }

  async execute(data: ICreateSessionDTO) {}
}

export { CreateSessionUseCase }
