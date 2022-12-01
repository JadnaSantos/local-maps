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

    console.log(response.status);
  });
});
