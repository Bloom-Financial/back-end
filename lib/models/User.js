const pool = require('../utils/pool');

module.exports = class User {
  id;
  username;

  constructor(row) {
    this.id = row.id;
    this.username = row.username;
  }

  static async insert({ username }) {
    const {
      rows,
    } = await pool.query('INSERT INTO userProfile (username) VALUES ($1) RETURNING *', [
      username,
    ]);
    if(!rows[0]) throw new Error('No token was found');
    else return new User(rows[0]);
  }

  static async findByusername(id) {
    const { rows } = await pool.query('SELECT * FROM userProfile WHERE id=$1', [
      id,
    ]);

    if(!rows[0]) throw new Error(`No user with id ${id} found`);
    return new User(rows[0]);
  }
};
