import mongoose from 'mongoose'
import { app } from './app'
import config from './config/index'
import { errorLogger, logger } from './shared/logger'
const { port, database_url } = config

async function connectDB() {
  try {
    await mongoose.connect(database_url as string)
    logger.info('database is connected!!')
    app.listen(port, () => {
      logger.info(`server is running`)
    })
  } catch (err) {
    errorLogger.error(`Falied to connect database.`, err)
  }
}

connectDB()
