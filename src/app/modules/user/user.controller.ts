import { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { UserServices } from './user.services'


// const createNewUser: RequestHandler = async (req, res, next) => {
//   try {
//     const { users } = req.body
//     const newUser = await UserServices.createUser(users)
//     res.status(201).json({
//       success: true,
//       message: `User created Successfully`,
//       data: newUser,
//     })
//   } catch (err) {
//     next(err)
//   }
// }

const createNewUser  = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
  const {users} = req.body
  const newUser = await UserServices.createUser(users)
  next()
  // res.status(201).json({
  //     success: true,
  //     message: `User created Successfully`,
  //     data: newUser,
  // })
  sendResponse(res,{statusCode:httpStatus.OK, message:'User is created successfully!!',success:true,data: newUser})
})
export const UserController = {
  createNewUser,
}
