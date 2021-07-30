import express, {
  NextFunction,
  Request,
  Response,
}  from 'express'
import {AppError} from '@errors/AppError';
import {AppValidateError} from '@errors/AppValidateError';
import { routes } from './routes'

const app = express()
app.use(express.json())
app.use(routes)


routes.use((err: Error, request: Request, response: Response, next: NextFunction) => {

  console.log('KAKAKKA')

  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message
    })
  }

  if (err instanceof AppValidateError) {
    return response.status(err.statusCode).json({
      status: 'error validation',
      message: err.errors
    })
  }

  console.error(`🎯 Error message: ${err.message}`)
  console.error(err)


  return response.status(500).json({
    status: 'error',
    message: 'Internal error server'
  })
})

export { app }
