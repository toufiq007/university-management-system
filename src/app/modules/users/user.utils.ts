import { User } from './user.model'

// find last user id from database
const findLastUserId = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean()
  return lastUser?.id
}

// generate a new user id
export const generateNewUserId = async () => {
  const currentId = (await findLastUserId()) || (0).toString().padStart(5, '0')
  const incrementalId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  return incrementalId
}
