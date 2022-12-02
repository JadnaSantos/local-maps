import { IStoreDTO } from '../../dtos/IStoreDTO';
import { IStoreRepository } from '../../repositories/interfaces/IStoreRepository';

export class CreateStoreUseCase {
  constructor(
    private storeRepository: IStoreRepository
  ) { }

  public async execute({ name, description, category, contact, latitude, longitude }: IStoreDTO) {

    const store = await this.storeRepository.create({
      name,
      description,
      category,
      contact,
      latitude,
      longitude
    });

    return store;
  }
}
