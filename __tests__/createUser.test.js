const fs = require('fs');
const request = require('supertest');
const app = require('../lib/app');
const User = require('../lib/models/User');
const pool = require('../lib/utils/pool');

describe('create user controller', () => {
  beforeEach(async() => {
    await pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });
  afterAll(() => {
    return pool.end();
  });
  it('uses the post route to create a user', async() => {
    const res = await request(app)
      .post('/user/user')
      .send({
        username: 'hey'
      });
    expect(res.body).toEqual({
      id: '1',
      username: 'hey'
    });
  });

  it('finds a user via username', async() => {
    const user = await User.insert({ username: 'sarah' });
    const response = await request(app)
      .get(`/user/user/${user.id}`)
      .send({ username: 'sarah' });
    expect(response.body).toEqual(user);

  });
});
