/* eslint-disable no-unused-vars */
/* eslint-disable no-undefined */
import { ErrorRequestHandler } from 'express'
import config from '../../config'
import { ApiError } from '../../errors/ApiError'
import { handleValidationError } from '../../errors/handleValidationError'
import { IGenericErrorMessages } from '../../inerfaces/IGenericErrorMessage'

export const globalErrorHandler: ErrorRequestHandler = (
  error,
  req,
  res,
  next
) => {
  let statusCode = 400
  let message = 'Something Went Wrong!!!'
  let errorMessages: IGenericErrorMessages[] = []

  if (error?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(error)
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorMessages = simplifiedError.errorMessages
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode
    message = error?.message
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : []
  } else if (error instanceof Error) {
    message = error?.message
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : []
  }

  res.status(404).json({
    success: false,
    message,
    errorMessages,
    stack: config.env === 'development' ? error?.stack : undefined,
  })

  next()
}
