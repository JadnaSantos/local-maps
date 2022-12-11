/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable indent */
import { StoreRepositoreInMemory } from '../../repositories/in-memory/StoreRepositoryInMemory';
import { CreateStoreUseCase } from './CreateStoreUseCase';

let createStore: CreateStoreUseCase;
let storeFakeRepository: StoreRepositoreInMemory;


describe('Create Store', () => {
    beforeEach(() => {
        storeFakeRepository = new StoreRepositoreInMemory();

        createStore = new CreateStoreUseCase(storeFakeRepository);
    });

    it('should be able to create a new store', async () => {
        const store = await createStore.execute({
            id: '53785460-febf-45f5-8fc8-4f7a45baba62323',
            name: 'Store Test',
            description: 'Store Description Test',
            contact: '23123123123',
            category: 'Mercado Test',
            latitude: 23,
            longitude: 23,
        });

        expect(store).toHaveProperty('id');
        expect(store).toHaveProperty('name');
        expect(store).toHaveProperty('description');
        expect(store).toHaveProperty('contact');
        expect(store).toHaveProperty('category');
        expect(store).toHaveProperty('latitude');
        expect(store).toHaveProperty('longitude');
    });

});
