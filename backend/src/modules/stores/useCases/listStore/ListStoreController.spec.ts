import request from 'supertest';
import { app } from '../../../../shared/http/server';
import { v4 as uuidv4 } from 'uuid';



describe('List Store', () => {
  it('should be able to list all stores', async () => {
    const responseToken = await request(app).post('/session')
      .send({
        email: 'user.test@gmail.com',
        password: '12345678',
      });

    const { token } = responseToken.body;

    const response = await request(app)
      .get('/store')
      .set({
        Authorization: `Bearer ${token}`,
      });

    expect(response.status).toBe(200);
  });


  it('should be able to get store by Id', async () => {
    const responseToken = await request(app).post('/session')
      .send({
        email: 'user.test@gmail.com',
        password: '12345678',
      });

    const { token } = responseToken.body;

    const store_id = '53785460-febf-45f5-8fc8-4f7a45baba6e';

    const response = await request(app)
      .get(`/store/${store_id}`)
      .set({
        Authorization: `Bearer ${token}`,
      });

    expect(response.status).toBe(200);
  });


  it('should be not able to get store doest not exist by Id', async () => {
    const responseToken = await request(app).post('/session')
      .send({
        email: 'user.test@gmail.com',
        password: '12345678',
      });

    const { token } = responseToken.body;

    const store_id = uuidv4();

    const response = await request(app)
      .get(`/store/${store_id}`)
      .set({
        Authorization: `Bearer ${token}`,
      });


    expect(response.status).toBe(400);
    expect(response.body.message).toEqual('Id not found');
  });
});
