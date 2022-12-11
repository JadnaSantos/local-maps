/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable indent */

import { AppError } from '../../../../shared/errors/AppError';
import { StoreRepositoreInMemory } from '../../repositories/in-memory/StoreRepositoryInMemory';
import { ShowStoreUseCase } from './ShowStoreUseCase';

let showStore: ShowStoreUseCase;
let storeFakeRepository: StoreRepositoreInMemory;


describe('Show Store', () => {
    beforeEach(() => {
        storeFakeRepository = new StoreRepositoreInMemory();

        showStore = new ShowStoreUseCase(storeFakeRepository);
    });

    it('should be able to get list by id', async () => {
        const store = await storeFakeRepository.create({
            id: '53785460-febf-45f5-8fc8-4f7a45baba62323',
            name: 'Store Test',
            description: 'Store Description Test',
            contact: '23123123123',
            category: 'Mercado Test',
            latitude: 23,
            longitude: 23,
        });

        const stores = await showStore.execute({
            id: '53785460-febf-45f5-8fc8-4f7a45baba62323'
        });

        expect(stores).toEqual(store);
    });

    it('should be able to not list store if id does not exist', async () => {
        await storeFakeRepository.create({
            id: '53785460-febf-45f5-8fc8-4f7a45baba62323',
            name: 'Store Test',
            description: 'Store Description Test',
            contact: '23123123123',
            category: 'Mercado Test',
            latitude: 23,
            longitude: 23,
        });

        await expect(showStore.execute(
            { id: '1234', }
        )).rejects.toEqual(new AppError('Id not found'));
    });
});
