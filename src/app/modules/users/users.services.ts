import { IUser } from './users.interface'
import { User } from './users.model'
import config from '../../../config'
import { generateNewUserId } from './users.utils'

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
  console.log(user)
  const createdUser = await User.create(user)
  return createdUser
}

export default {
  createUser,
}
