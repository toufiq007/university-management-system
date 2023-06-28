import cors from 'cors';
import express, { Application } from 'express';
import { globalErrorHandler } from './app/middlewares/globalErrorHandler';
import routes from './app/routes';

export const app: Application = express();
app.use(cors());
// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// all routes
app.use('/api/v1/',routes)

// app.get('/', async (req: Request, res: Response) => {
//   console.log(x)
// })

// global error handler
app.use(globalErrorHandler);
