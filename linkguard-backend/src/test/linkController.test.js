const request = require('supertest');
const app = require('../app');

describe('POST /api/links/analyze', () => {
  it('deve analisar o link e retornar o resultado', async () => {
    const response = await request(app)
      .post('/api/links/analyze')
      .send({ url: 'http://example.com' });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('url');
    expect(response.body).toHaveProperty('isMalicious');
    expect(response.body).toHaveProperty('confidence');
  });

  it('deve retornar erro para uma URL inválida', async () => {
    const response = await request(app)
      .post('/api/links/analyze')
      .send({ url: 'invalid-url' });

    expect(response.status).toBe(400);
    expect(response.body.errors[0].msg).toBe('URL inválida');
  });
});
