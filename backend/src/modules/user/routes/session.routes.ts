import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import { AuthenticateUserController } from '../useCases/authenticateUser/AuthenticateUserController';

export const sessionRouter = Router();
const authenticateUserController = new AuthenticateUserController();

sessionRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),

  authenticateUserController.handle,
);
