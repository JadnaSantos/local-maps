import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { errors } from 'celebrate';
import { AppError } from '../errors/AppError';
import { routes } from './routes/routes';

export const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(errors());


app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
    });
  },
);


app.listen(3001, () => console.log('Server is running 🚀'));
