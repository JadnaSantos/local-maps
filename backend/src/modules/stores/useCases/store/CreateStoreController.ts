import { Request, Response } from 'express';
import { StoreRepository } from '../../repositories/prisma/StoreRepository';
import { CreateStoreUseCase } from './CreateStoreUseCase';

export class CreateStoreController {
  async handle(request: Request, response: Response) {
    const { name, description, category, contact, longitude, latitude } = request.body;

    const createStore = new CreateStoreUseCase(new StoreRepository());

    const store = await createStore.execute({
      name,
      description,
      category,
      contact,
      longitude,
      latitude

    });

    return response.json(store);
  }
}
