import { Store } from '@prisma/client';
import { IStoreDTO } from '../../dtos/IStoreDTO';
import { IStoreRepository, StoreTest } from '../interfaces/IStoreRepository';

export class StoreRepositoreInMemory implements IStoreRepository {
  stores: Store[] = [];

  async create({
    id,
    name,
    description,
    category,
    contact,
    latitude,
    longitude
  }: IStoreDTO): Promise<Store> {
    const store: Store = {
      id: String(id),
      name,
      description,
      category,
      contact,
      latitude,
      longitude
    };

    this.stores.push(store);

    return store;
  }

  async getAll(): Promise<Store[]> {
    const store = this.stores;

    return store;
  }

  async getById({ id }: StoreTest): Promise<Store | null> {
    return this.stores.find(store => store.id === id) || null;
  }



}
