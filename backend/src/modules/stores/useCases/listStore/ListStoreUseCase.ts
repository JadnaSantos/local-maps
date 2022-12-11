import { IStoreRepository } from '../../repositories/interfaces/IStoreRepository';

export class ListStoreUseCase {
  constructor(
    private storeRepository: IStoreRepository
  ) { }

  public async execute() {
    const store = await this.storeRepository.getAll();

    return store;
  }

}
