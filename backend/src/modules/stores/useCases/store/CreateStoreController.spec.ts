import request from 'supertest';
import { app } from '../../../../shared/http/server';


describe('Create Store', () => {
  it('should be able to create new store', async () => {
    const responseToken = await request(app).post('/session')
      .send({
        email: 'user.test@gmail.com',
        password: '12345678',
      });

    const { token } = responseToken.body;

    const response = await request(app)
      .post('/store')
      .send({
        name: 'Petz',
        description: 'É o melhor mercado da região sempre com bons precos',
        category: 'Pet',
        contact: '(11) 00000000',
        latitude: -23.5910414,
        longitude: 46.5446856
      })
      .set({
        Authorization: `Bearer ${token}`,
      });


    expect(response.status).toBe(200);
  });


  it('should be not able to create new store no existing user\'s', async () => {
    const responseToken = await request(app).post('/session')
      .send({
        email: 'usernoexistent@email.com',
        password: 'usernoexistentpassword',
      });

    expect(responseToken.status).toBe(401);
    expect(responseToken.body.token).toBe(undefined);

    const { token } = responseToken.body;

    const response = await request(app)
      .post('/store')
      .send({
        name: 'Petz',
        description: 'É o melhor mercado da região sempre com bons precos',
        category: 'Pet',
        contact: '(11) 00000000',
        latitude: -23.5910414,
        longitude: 46.5446856
      })
      .set({
        Authorization: `Bearer ${token}`,
      });


    expect(responseToken.status).toBe(401);
    expect(response.body.message).toEqual('Token Invalid');
  });
});
