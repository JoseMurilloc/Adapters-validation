import { CreateUserUseCase } from './CreateUserUseCase'
import { Request, Response } from 'express'
import { AppValidateError } from '@errors/AppValidateError';
import { AppError } from '@errors/AppError';
import { Validate } from '@adapters/validate';

class CreateUserController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
    private validate: Validate
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, email, password } = request.body;


    await this.validate.createUserValidate({
        email,
        password,
        name,
      })

      const user = await this.createUserUseCase.execute({
        name,
        email,
        password
      })

      return response.status(201).json(user);
    } catch (err) {

      if (err instanceof AppValidateError) {
        return response.status(err.statusCode).json({
          status: 'error validate',
          errors: err.errors,
        })
      }

      if (err instanceof AppError) {
        return response.status(err.statusCode).json({
          status: 'error',
          message: err.message
        })
      }

    console.error(`🎯 Error message: ${err.message}`)
    console.error(err)


    return response.status(500).json({
      status: 'error',
      message: 'Internal error server'
    })
    }
  }

}

export { CreateUserController }
