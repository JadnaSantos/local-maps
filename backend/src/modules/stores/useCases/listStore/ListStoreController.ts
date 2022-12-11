import { Request, Response } from 'express';
import { StoreRepository } from '../../repositories/prisma/StoreRepository';
import { ListStoreUseCase } from './ListStoreUseCase';
import { ShowStoreUseCase } from './ShowStoreUseCase';

export class ListStoreController {
  public async handle(request: Request, response: Response) {
    const listStore = new ListStoreUseCase(new StoreRepository());

    const store = await listStore.execute();

    return response.json(store);
  }

  public async show(request: Request, response: Response) {
    const { id } = request.params;

    const show = new ShowStoreUseCase(new StoreRepository());

    const showStore = await show.execute({ id });

    console.log('store', showStore);

    return response.json(showStore);
  }


}
