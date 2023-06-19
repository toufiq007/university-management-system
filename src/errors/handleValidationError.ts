import mongoose from 'mongoose'
import { IGenericErrorMessages } from '../inerfaces/IGenericErrorMessage'
import { IGenericErrorResponse } from '../inerfaces/IGenericErrorResponse'

export const handleValidationError = (
  error: mongoose.Error.ValidationError
): IGenericErrorResponse => {
  const errors: IGenericErrorMessages[] = Object.values(error.errors).map(
    (elem: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: elem?.path,
        message: elem?.message,
      }
    }
  )

  const statusCode = 404
  return {
    statusCode,
    message: 'Validation Error',
    errorMessages: errors,
  }
}
