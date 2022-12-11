/* eslint-disable indent */
import request from 'supertest';
import { app } from '../../../../shared/http/server';

const TOKEN = '123456789';

describe('Profille Controller', () => {
    it.skip('should be able to show profile user', async () => {
        const response = await request(app)
            .get('/profile')
            .set('authorization', `Bearer ${TOKEN}`);


        console.log(response);
        expect(response.status).toBe(200);
    });
});
