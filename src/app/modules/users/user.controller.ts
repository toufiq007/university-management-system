import { RequestHandler } from 'express'
import { UserServices } from './user.services'

const createNewUser: RequestHandler = async (req, res, next) => {
  const { users } = req.body
  //   console.log(users)
  try {
    const newUser = await UserServices.createUser(users)
    res.status(201).json({
      success: true,
      message: `User created Successfully`,
      data: newUser,
    })
  } catch (err) {
    next(err)
  }
}

export const UserController = {
  createNewUser,
}