import { Store } from '@prisma/client';
import { IStoreDTO } from '../../dtos/IStoreDTO';
import { IStoreRepository } from '../interfaces/IStoreRepository';

export class StoreRepositoreInMemory implements IStoreRepository {
  stores: Store[] = [];

  async create({
    id,
    name,
    description,
    category,
    contact,
    adress
  }: IStoreDTO): Promise<Store> {
    const store: Store = {
      id: String(id),
      name,
      description,
      category,
      contact,
      adress
    };

    this.stores.push(store);

    return store;
  }

  async getAll(): Promise<Store[]> {
    const listStore: Store[];

    this.stores.push(listStore);

    return listStore;
  }
}
