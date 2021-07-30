import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { PostgresUsersRepository } from "../../../repositories/user/implementations/PostgresUsersRepository";
import { ValidateJSUserAdapter } from "../../../adapters/validate/user/adpaterImplementation/ValidateJSUserAdapter";
import { Crypt } from "../../../adapters/crypt";
import {BcrypeJSAdapter} from '../../../adapters/crypt/adapterImplementation/BcrypeJSAdapter'

const bcrypeJSAdapter = new BcrypeJSAdapter()
const postgresUsersRepository = new PostgresUsersRepository()
const validateUserAdapter = new ValidateJSUserAdapter()
const cryptAdapter = new Crypt(bcrypeJSAdapter)

const createUserUseCase = new CreateUserUseCase(postgresUsersRepository, validateUserAdapter, cryptAdapter)
const createUserController = new CreateUserController(createUserUseCase)

export { createUserController }
