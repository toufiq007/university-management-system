import express, { Application, Request, Response } from 'express'
import cors from 'cors'

export const app: Application = express()

app.use(cors())
// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
  res.send('hello')
})
