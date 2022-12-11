/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable indent */

import { StoreRepositoreInMemory } from '../../repositories/in-memory/StoreRepositoryInMemory';
import { ListStoreUseCase } from './ListStoreUseCase';

let listStore: ListStoreUseCase;
let storeFakeRepository: StoreRepositoreInMemory;

describe('List Store', () => {
    beforeEach(() => {
        storeFakeRepository = new StoreRepositoreInMemory();

        listStore = new ListStoreUseCase(storeFakeRepository);
    });

    it('should be able to list all store', async () => {
        const store = await storeFakeRepository.create({
            id: '53785460-febf-45f5-8fc8-4f7a45baba62323',
            name: 'Store Test',
            description: 'Store Description Test',
            contact: '23123123123',
            category: 'Mercado Test',
            latitude: 23,
            longitude: 23,
        });

        const stores = await listStore.execute();

        expect(stores).toEqual([store]);
    });

});


