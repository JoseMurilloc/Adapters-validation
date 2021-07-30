import express, {
  NextFunction,
  Request,
  Response
}  from 'express'
import AppError from './errors/AppError';

import { routes } from './routes';

const app = express()
app.use(express.json())
app.use(routes)

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  console.error(`🎯 Error message: ${err.message}`)
  console.error(err)

  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message
    })
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal error server'
  })
})


export { app }
