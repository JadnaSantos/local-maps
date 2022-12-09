/* eslint-disable indent */
import { Router } from 'express';
import { ListStoreController } from '../useCases/listStore/ListStoreController';
import { celebrate, Joi, Segments } from 'celebrate';


export const storeListRoutes = Router();

const storeListController = new ListStoreController();

storeListRoutes.get('/', storeListController.handle);

storeListRoutes.get(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        },
    }),

    storeListController.show
);
