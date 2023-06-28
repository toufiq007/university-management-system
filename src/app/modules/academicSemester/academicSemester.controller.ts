import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AcademicSemesterService } from './academicSemester.services';

const createNewSemester = catchAsync( async (req:Request, res:Response,next:NextFunction) => {
  const { ...academicSemesterData } = req.body;
  const result = await AcademicSemesterService.createSemester(
    academicSemesterData
  );
  next()
  // res.status(200).json({
  //   success: true,  
  //   message: 'semester created successfully!!',
  //   data: result,
  // });
  sendResponse(res,{statusCode: httpStatus.OK, message: 'Semester si created successfully!!',success: true,data: result})
})

export const academicSemesterController = {
  createNewSemester,
};
