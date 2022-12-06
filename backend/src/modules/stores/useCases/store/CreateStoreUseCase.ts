import { IStoreDTO } from '../../dtos/IStoreDTO';
import { IStoreRepository } from '../../repositories/interfaces/IStoreRepository';

export class CreateStoreUseCase {
  constructor(
    private storeRepository: IStoreRepository
  ) { }

  public async execute({ name, description, category, contact, adress }: IStoreDTO) {

    const store = await this.storeRepository.create({
      name,
      description,
      category,
      contact,
      adress
    });

    return store;
  }
}
