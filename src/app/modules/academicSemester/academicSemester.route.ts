import express from 'express';
import { validRequest } from '../../middlewares/validateRequestHander';
import { academicSemesterController } from './academicSemester.controller';
import { AcademicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

router.post(
  '/create-semester',
  validRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
  academicSemesterController.createNewSemester
);

export const AcademicSemesterRoutes = router;
