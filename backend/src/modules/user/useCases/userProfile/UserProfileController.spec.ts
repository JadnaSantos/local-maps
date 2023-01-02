/* eslint-disable indent */
import request from 'supertest';
import { app } from '../../../../shared/http/server';


describe('Profille User Controller', () => {
  it('should be able to list user\'s profile', async () => {

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

  it('should not be able to list no existing user\'s profile', async () => {
    const responseToken = await request(app).post('/session').send({
      email: 'usernoexistent@email.com',
      password: 'usernoexistentpassword',
    });

    expect(responseToken.status).toBe(401);
    expect(responseToken.body.token).toBe(undefined);
    expect(responseToken.body.message).toEqual('Incorrect email or password');

    const { token } = responseToken.body;

    const response = await request(app)
      .get('/profile')
      .set({
        Authorization: `Bearer ${token}`,
      });

    expect(responseToken.status).toBe(401);
    expect(response.body.message).toEqual('Token Invalid');
  });
});
