import config from '../../../config'
import { IUser } from './user.interface'
import { User } from './user.model'
import { generateNewUserId } from './user.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  // generate incremental id and set it to new user
  const id = await generateNewUserId()
  if (!user.id) {
    user.id = id
  }

  // set default password
  if (!user.password) {
    user.password = config.default_user_password as string
  }
  const createdUser = await User.create(user)
  if (!createUser) {
    throw new Error('falied to create User!!')
  }
  return createdUser
}

export const UserServices = {
  createUser,
}
