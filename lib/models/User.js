const pool = require('../utils/pool');

module.exports = class User {
  id;
  email;

  constructor(row) {
    this.id = row.id;
    this.email = row.email;
  }

  static async insert({ email }) {
    const {
      rows,
    } = await pool.query('INSERT INTO users (email) VALUES ($1) RETURNING *', [
      email,
    ]);
    if (!rows[0]) throw new Error('No token was found');
    else return new User(rows[0]);
  }

  static async findByEmail(email) {
    const { rows } = await pool.query('SELECT * FROM users WHERE email=$1', [
      email,
    ]);

    if (!rows[0]) throw new Error(`No user with email ${email} found`);
    return new User(rows[0]);
  }
};
