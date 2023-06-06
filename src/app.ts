import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { router } from './app/modules/users/users.router'

export const app: Application = express()

app.use(cors())
// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// all routes
app.use('/api/v1/users', router)

app.get('/', (req: Request, res: Response) => {
  res.send(`Successfully run our project`)
})
