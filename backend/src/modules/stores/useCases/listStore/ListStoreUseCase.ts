import { IStoreRepository } from '../../repositories/interfaces/IStoreRepository';

export class CreateStoreUseCase {
  constructor(
    private storeRepository: IStoreRepository
  ) { }

  public async execute() {
    const store = await this.storeRepository.getAll();

    return store;
  }

}
