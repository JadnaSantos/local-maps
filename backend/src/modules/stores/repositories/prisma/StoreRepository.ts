import { Store } from '@prisma/client';
import { prisma } from '../../../../database';
import { IStoreDTO } from '../../dtos/IStoreDTO';
import { IStoreRepository } from '../interfaces/IStoreRepository';


export class StoreRepository implements IStoreRepository {
  public async create({ name, description, category, contact, adress }: IStoreDTO): Promise<Store> {
    const store = await prisma.store.create({
      data: {
        name,
        description,
        category,
        contact,
        adress
      }
    });

    return store;
  }

  public async getAll(): Promise<Store[]> {
    const store = await prisma.store.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        category: true,
        contact: true,
        adress: true
      }
    });

    return store;
  }
}
