const request = require('supertest');
const app = require('../app');

describe('check the auth route for redirect to front end', () => {
  it('uses post route to see that token is redirected to front end', async() => {
    return request(app)
      .post('/api/v1/auth/token')
      .then(res => {
        expect(res.body).toEqual({
          
        });
      });
  });
});
