import { Store } from '@prisma/client';
import { IStoreDTO } from '../../dtos/IStoreDTO';

export interface IStoreRepository {
  create({ name, description, category, contact, adress }: IStoreDTO): Promise<Store>
  getAll(): Promise<Store[]>
}
