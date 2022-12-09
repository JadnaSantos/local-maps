/* eslint-disable indent */
import { AppError } from '../../../../shared/errors/AppError';
import { IStoreRepository, StoreTest } from '../../repositories/interfaces/IStoreRepository';

export class ShowStoreUseCase {
    constructor(
        private storeRepository: IStoreRepository
    ) { }

    public async execute({ id }: StoreTest) {
        const store = await this.storeRepository.getById({ id });

        if (!store) {
            throw new AppError('Id not found');
        }

        return store;
    }
}
