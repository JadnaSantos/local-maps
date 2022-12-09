import { Request, Response } from 'express';
import { StoreRepository } from '../../repositories/prisma/StoreRepository';
import { CreateStoreUseCase } from './ListStoreUseCase';
import { ShowStoreUseCase } from './ShowStoreUseCase';

export class ListStoreController {
  public async handle(request: Request, response: Response) {
    const listStore = new CreateStoreUseCase(new StoreRepository());

    const store = await listStore.execute();

    return response.json(store);
  }

  public async show(request: Request, response: Response) {
    const { id } = request.params;

    const show = new ShowStoreUseCase(new StoreRepository());

    const showStore = show.execute({ id });

    return response.json(showStore);
  }


}
