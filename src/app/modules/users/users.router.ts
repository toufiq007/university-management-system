import express from 'express'
import usersController from './users.controller'

export const router = express.Router()

router.post('/create-user', usersController.createNewUser)
