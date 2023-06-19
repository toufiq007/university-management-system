import { IGenericErrorMessages } from './IGenericErrorMessage'

export type IGenericErrorResponse = {
  statusCode: number
  message: string
  errorMessages: IGenericErrorMessages[]
}
