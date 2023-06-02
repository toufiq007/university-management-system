import mongoose from 'mongoose'
import { IUser } from './users.interface'

type UserModel = mongoose.Model<IUser, object>
const userSchema = new mongoose.Schema<IUser>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

export const User = mongoose.model<IUser, UserModel>('User', userSchema)
