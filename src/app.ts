import cors from 'cors'
import express, { Application } from 'express'
import { globalErrorHandler } from './app/middlewares/globalErrorHandler'
import { router } from './app/modules/users/users.router'

export const app: Application = express()

app.use(cors())
// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// all routes
app.use('/api/v1/users', router)

// app.get('/', (req, res): RequestHandler => {

// })

// global error handler
app.use(globalErrorHandler)
