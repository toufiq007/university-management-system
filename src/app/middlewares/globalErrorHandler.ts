/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undefined */
import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import config from '../../config';
import { ApiError } from '../../errors/ApiError';
import { handleValidationError } from '../../errors/handleValidationError';
import { handleZodError } from '../../errors/handleZodError';
import { IGenericErrorMessages } from '../../inerfaces/IGenericErrorMessage';
import { errorLogger } from '../../shared/logger';

export const globalErrorHandler: ErrorRequestHandler = (
  error,
  req,
  res,
  next
) => {
  config.env === 'development'
    ? console.log('global error handler', error)
    : errorLogger.error('global error handler ', error);

  let statusCode = 400;
  let message = 'Something Went Wrong!!!';
  let errorMessages: IGenericErrorMessages[] = [];

  if (error?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error instanceof ZodError) {
    const simplifiedError = handleZodError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode;
    message = error?.message ? error?.message : message;
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : [];
  } else if (error instanceof Error) {
    message = error?.message ? error?.message : message;
    errorMessages = error?.message
      ? [
          {
            path: '',
            message,
          },
        ]
      : [];
  }

  res.status(statusCode).json({
    success: false,
    message: message,
    errorMessages,
    stack: config.env === 'development' ? error?.stack : undefined,
  });

  next();
};
