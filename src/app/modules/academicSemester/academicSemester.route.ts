import express from 'express';
import { validRequest } from '../../middlewares/validateRequestHander';
import { AcademicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

router.post(
  '/create-user',
  validRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema)
);

export const UserRoutes = router;
