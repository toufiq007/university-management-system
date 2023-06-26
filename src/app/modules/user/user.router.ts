import express from 'express'
import { validRequest } from '../../middlewares/validateRequestHander'
import { UserController } from './user.controller'
import { UserValidation } from './user.validation'

const router = express.Router()

router.post(
  '/create-user',
  validRequest(UserValidation.createUserZodSchema),
  UserController.createNewUser
)

export const UserRoutes = router
