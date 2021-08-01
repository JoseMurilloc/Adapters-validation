import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { PostgresUsersRepository } from "@repositories/user/implementations/PostgresUsersRepository";
import { Crypt } from "@adapters/crypt";
import { BcrypeJSAdapter } from '@adapters/crypt/adapterImplementation/BcrypeJSAdapter'
import { Validate } from "@adapters/validate";
import { ValidateJSAdapter } from "@adapters/validate/adpaterImplementation/ValidateJSAdapter";
import { YupAdapter } from "@adapters/validate/adpaterImplementation/YupAdapter";

const postgresUsersRepository = new PostgresUsersRepository()

const bcrypeJSAdapter = new BcrypeJSAdapter()
const crypt = new Crypt(bcrypeJSAdapter)

const validateAdapter = new YupAdapter()
const validate = new Validate(validateAdapter)

const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository,
  crypt,
)
const createUserController = new CreateUserController(
  createUserUseCase,
  validate
)

export { createUserController }
