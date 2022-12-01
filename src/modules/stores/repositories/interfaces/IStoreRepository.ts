import { Store } from '@prisma/client';
import { IStoreDTO } from '../../dtos/IStoreDTO';

export interface IStoreRepository {
  create({ name, description, category, contact, latitude, longitude }: IStoreDTO): Promise<Store>
  getAll(): Promise<Store[]>
}
