/* eslint-disable indent */
import request from 'supertest';
import { app } from '../../../../shared/http/server';


describe('Profille User Controller', () => {
  it('should be able to list user profile', async () => {

    const responseToken = await request(app).post('/session')
      .send({
        email: 'user.test@gmail.com',
        password: '12345678',
      });

    const { token } = responseToken.body;

    const response = await request(app)
      .get('/profile')
      .set({
        Authorization: `Bearer ${token}`,
      });

    expect(response.status).toBe(200);
  });

  it('should not be able to list non-existing user\'s profile', async () => {
    const responseToken = await request(app).post('/sessions').send({
      email: 'usernonexistent@email.com',
      password: 'usernonexistentpassword',
    });

    expect(responseToken.status).toBe(400);
    expect(responseToken.body.token).toBe(undefined);

    const { token } = responseToken.body;

    const response = await request(app)
      .get('/profile')
      .set({
        Authorization: `Bearer ${token}`,
      });

    console.log(response);
    expect(response.body.message).toEqual('Token Invalid!');
  });
});
