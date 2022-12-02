import request from 'supertest';
import { app } from '../../../../shared/http/server';

describe('Create User Controller', () => {
  it('should be able to create a new user', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'User',
        email: 'user@example.com',
        password: 'password'
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
  });

  it('should not be able to create an existing user', async () => {
    await request(app)
      .post('/users')
      .send({
        name: 'User',
        email: 'user@example.com',
        password: 'password'
      });


    const response = await request(app).post('/users').send({
      name: 'User',
      email: 'user@example.com',
      password: 'password'
    });

    expect(response.status).toBe(400);
  });
});
