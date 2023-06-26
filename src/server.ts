import { Server } from 'http';
import mongoose from 'mongoose';
import { app } from './app';
import config from './config/index';
import { errorLogger, logger } from './shared/logger';
const { port, database_url } = config;

// code for uncaught exception
process.on('uncaughtException', error => {
  errorLogger.error(error);
  process.exit(1);
});

let server: Server;
async function connectDB() {
  try {
    await mongoose.connect(database_url as string);
    logger.info('database is connected!!');
    server = app.listen(port, () => {
      logger.info(`server is running`);
    });
  } catch (err) {
    errorLogger.error(`Falied to connect database.`, err);
  }
  // code for unhandled promise rejection
  process.on('unhandledRejection', err => {
    if (server) {
      server.close(() => {
        errorLogger.error(err);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

connectDB();

// signal for termination
// process.on('SIGTERM', () => {
//   logger.info('SIGTERM is recieved')
//   if (server) {
//     server.close()
//   }
// })
