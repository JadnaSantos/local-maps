import { Store } from '@prisma/client';
import { IStoreDTO } from '../../dtos/IStoreDTO';

export interface StoreTest {
  id: string;
}

export interface IStoreRepository {
  create({ name, description, category, contact, latitude, longitude }: IStoreDTO): Promise<Store>
  getAll(): Promise<Store[]>
  getById({ id }: StoreTest): Promise<Store | null>
}
