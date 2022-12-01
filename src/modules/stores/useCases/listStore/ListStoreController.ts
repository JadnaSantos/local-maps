import { Request, Response } from 'express';
import { StoreRepository } from '../../repositories/prisma/StoreRepository';
import { CreateStoreUseCase } from './ListStoreUseCase';

export class ListStoreController {
  async handle(request: Request, response: Response) {
    const listStore = new CreateStoreUseCase(new StoreRepository());

    const store = await listStore.execute();

    return response.json(store);
  }
}
