import { Router, Request, Response } from 'express'
import { createUserController } from '../useCases/User/CreateUser'

const usersRoutes = Router()

usersRoutes.get('/', async(request: Request, response: Response) => {
  return response.json({ message: 'List user'})
})

usersRoutes.post('/', (request, response) => {
  return createUserController.handle(request, response)
})


export { usersRoutes }
