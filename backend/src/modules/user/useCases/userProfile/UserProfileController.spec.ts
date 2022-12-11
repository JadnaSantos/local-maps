/* eslint-disable indent */
import request from 'supertest';
import { app } from '../../../../shared/http/server';
import jwt from 'jsonwebtoken';
import { AppError } from '../../../../shared/errors/AppError';


describe('Profille Controller', () => {
    it('It should not verify the access token and respond with status 401', async () => {
        const jwtSpy = jest.spyOn(jwt, 'verify');
        jwtSpy.mockImplementationOnce(() => { throw new AppError('Token invalid'); });

        const res = await request(app)
            .get('/profile')
            .set('access-token', 'somerandomjwttoken')
            .send({});

        expect(res.status).toEqual(400);

    });
});
