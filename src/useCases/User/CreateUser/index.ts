import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { PostgresUsersRepository } from "@repositories/user/implementations/PostgresUsersRepository";
import { Crypt } from "@adapters/crypt";
import { BcrypeJSAdapter } from '@adapters/crypt/adapterImplementation/BcrypeJSAdapter'
import { Validate } from "@adapters/validate";
import { ValidateJSAdapter } from "@adapters/validate/adpaterImplementation/ValidateJSAdapter";

const postgresUsersRepository = new PostgresUsersRepository()

const bcrypeJSAdapter = new BcrypeJSAdapter()
const crypt = new Crypt(bcrypeJSAdapter)

const validateJSAdapter = new ValidateJSAdapter()
const validate = new Validate(validateJSAdapter)

const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository,
  crypt,
  validate
)
const createUserController = new CreateUserController(createUserUseCase)

export { createUserController }
