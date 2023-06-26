import { z } from 'zod';
import {
  academicSemesterCodes,
  academicSemesterMonths,
  academicSemesterTitles,
} from './academicSemester.constant';

const createAcademicSemesterZodSchema = z.object({
  body: z.object({
    title: z.enum([...academicSemesterTitles] as [string, ...string[]], {
      required_error: 'title is required!!',
    }),
    year: z.number({
      required_error: 'year is requried!!',
    }),
    codes: z.enum([...academicSemesterCodes] as [string, ...string[]], {
      required_error: 'semester code is required!!',
    }),
    startMonths: z.enum([...academicSemesterMonths] as [string, ...string[]], {
      required_error: 'start Month is required!!',
    }),
    endMonths: z.enum([...academicSemesterMonths] as [string, ...string[]], {
      required_error: 'End Month is required!!',
    }),
  }),
});

export const AcademicSemesterValidation = {
  createAcademicSemesterZodSchema,
};
