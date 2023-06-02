import mongoose from 'mongoose'
import config from './config/index'

const { port, database_url } = config

import { app } from './app'
async function connectDB() {
  try {
    await mongoose.connect(database_url as string)
    console.log('database is connected')
    app.listen(port, () => {
      console.log('server is running')
    })
  } catch (err) {
    console.log(err)
  }
}

connectDB()
