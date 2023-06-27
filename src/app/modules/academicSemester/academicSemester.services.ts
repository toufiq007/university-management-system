import httpStatus from 'http-status';
import { ApiError } from '../../../errors/ApiError';
import { academicSemesterTitleCodeMapper } from './academicSemester.constant';
import { IAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemeter.model';

const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  if (academicSemesterTitleCodeMapper[payload.title] === payload.code) {
    const result = await AcademicSemester.create(payload);
    return result;
  } else {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid Semester code!!');
  }
};
export const AcademicSemesterService = {
  createSemester,
};
