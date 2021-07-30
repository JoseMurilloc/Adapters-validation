import { CreateSessionUseCase } from './CreateSessionUseCase'
import { Request, Response } from 'express'

class CreateSessionController {
  constructor(
    private createUserUseCase: CreateSessionUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    try {
      return response.status(201).json();
    } catch (err) {
      return response.status(400).json({ error: err.message});
    }
  }

}

export { CreateSessionController }
