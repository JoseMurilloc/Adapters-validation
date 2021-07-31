import { CreateSessionUseCase } from './CreateSessionUseCase'
import { Request, Response } from 'express'

class CreateSessionController {
  constructor(
    private createSessionUseCase: CreateSessionUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { email, password } = request.body;

      return response.status(201).json();
    } catch (err) {
      return response.status(400).json({ error: err.message});
    }
  }

}

export { CreateSessionController }
