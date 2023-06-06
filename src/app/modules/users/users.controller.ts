import { Request, Response } from 'express'
import usersServices from './users.services'

const createNewUser = async (req: Request, res: Response) => {
  const { users } = req.body
  //   console.log(users)
  try {
    const newUser = await usersServices.createUser(users)
    res.status(201).json({
      success: true,
      message: `User created Successfully`,
      data: newUser,
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: `Failed to created user!!!`,
    })
  }
}

export default {
  createNewUser,
}
