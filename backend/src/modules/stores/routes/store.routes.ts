import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import { CreateStoreController } from '../useCases/store/CreateStoreController';

export const storeRoutes = Router();

const storeController = new CreateStoreController();

storeRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      description: Joi.string().required(),
      category: Joi.string().required(),
      contact: Joi.string().required(),
      adress: Joi.string().required(),
    },
  }),

  storeController.handle,
);

