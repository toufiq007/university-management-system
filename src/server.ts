import { Server } from 'http'
import mongoose from 'mongoose'
import { app } from './app'
import config from './config/index'
import { errorLogger, logger } from './shared/logger'
const { port, database_url } = config

async function connectDB() {
  let server: Server
  try {
    await mongoose.connect(database_url as string)
    logger.info('database is connected!!')
    server = app.listen(port, () => {
      logger.info(`server is running`)
    })
  } catch (err) {
    errorLogger.error(`Falied to connect database.`, err)
  }
  // for unhandled promise rejection
  process.on('unhandledRejection', err => {
    console.log(
      'Unhandled promise rejection detected!!.. we are closing our server....'
    )
    if (server) {
      server.close(() => {
        errorLogger.error(err)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

connectDB()
