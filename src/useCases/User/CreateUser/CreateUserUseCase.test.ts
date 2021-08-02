import { Crypt } from "@adapters/crypt"
import { BcrypeJSAdapter } from "@adapters/crypt/adapterImplementation/BcrypeJSAdapter"
import { AppError } from "@errors/AppError"
import { FakePostgresUsersRepository } from "@repositories/user/fakes/FakePostgresUsersRepository"
import { CreateUserUseCase } from "./CreateUserUseCase"

describe('Create user', () => {

  it ('Should been have create with success', async() => {
    const fakePostgresUsersRepository = new FakePostgresUsersRepository()

    const bcrypeJSAdapter = new BcrypeJSAdapter()
    const crypt = new Crypt(bcrypeJSAdapter)

    const createUserUseCase = new CreateUserUseCase(
      fakePostgresUsersRepository,
      crypt,
    )

    const userCreated = await createUserUseCase.execute({
      email: 'john@gmail.com',
      name: 'john doe',
      password: '123456'
    })

    expect(userCreated.name).toBe('john doe')
    expect(userCreated.email).toBe('john@gmail.com')
  })

  it ('No Should have create with email already exist', async() => {
    const fakePostgresUsersRepository = new FakePostgresUsersRepository()

    const bcrypeJSAdapter = new BcrypeJSAdapter()
    const crypt = new Crypt(bcrypeJSAdapter)

    const createUserUseCase = new CreateUserUseCase(
      fakePostgresUsersRepository,
      crypt,
    )
    let error;

    try {
      await createUserUseCase.execute({
        name: 'initial-user',
        email: 'intialuser@gmail.com',
        password: '123456'
      })
    } catch(requestError) {
      error = requestError
    }

    expect(error.message).toBe('User already exists.')
    expect(error.statusCode).toBe(400)
  })
})
