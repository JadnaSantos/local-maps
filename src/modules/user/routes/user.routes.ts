import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import { CreateUserController } from '../useCases/user/CreateUserController';

export const userRouter = Router();

const userController = new CreateUserController();

userRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required().min(3),
      password: Joi.string().required().min(8),
    },
  }),

  userController.handle,
);

