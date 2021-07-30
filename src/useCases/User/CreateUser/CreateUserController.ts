import { CreateUserUseCase } from './CreateUserUseCase'
import { Request, Response } from 'express'

class CreateUserController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    try {
      const user = await this.createUserUseCase.execute({
        name,
        email,
        password
      })

      return response.status(201).json(user);
    } catch (err) {
      return response.status(400).json({ error: err.message});
    }
  }

}

export { CreateUserController }
