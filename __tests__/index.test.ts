import App from '../src/App';

const app = new App([]).server;

import request from 'supertest';

describe('GET /healthcheck', () => {
  it('return status code 200 if the app works', async () => {
    const res = await request(app).get('/healthcheck').send();
    expect(res.statusCode).toEqual(200);
  });
});
