import { ZodError, ZodIssue } from 'zod';
import { IGenericErrorMessages } from '../inerfaces/IGenericErrorMessage';
import { IGenericErrorResponse } from '../inerfaces/IGenericErrorResponse';

export const handleZodError = (error: ZodError): IGenericErrorResponse => {
  const errors: IGenericErrorMessages[] = error.issues.map(
    (issue: ZodIssue) => {
      return {
        path: issue?.path[issue.path.length - 1],
        message: issue?.message,
      };
    }
  );

  const statusCode = 400;

  return {
    statusCode,
    message: 'Validation Error',
    errorMessages: errors,
  };
};
