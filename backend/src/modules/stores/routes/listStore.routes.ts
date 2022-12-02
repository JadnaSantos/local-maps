import { Router } from 'express';
import { ListStoreController } from '../useCases/listStore/ListStoreController';


export const storeListRoutes = Router();

const storeListController = new ListStoreController();

storeListRoutes.get('/', storeListController.handle);

