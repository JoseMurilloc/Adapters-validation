import { CreateSessionController } from "./CreateSessionController";
import { CreateSessionUseCase } from "./CreateSessionUseCase";
import { PostgresUsersRepository } from "../../../repositories/user/implementations/PostgresUsersRepository";

const postgresUsersRepository = new PostgresUsersRepository()

const createSessionUseCase = new CreateSessionUseCase(postgresUsersRepository)
const createUserController = new CreateSessionController(createSessionUseCase)

export { createUserController }
