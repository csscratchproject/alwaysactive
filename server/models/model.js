/* eslint-disable linebreak-style */
const { Pool } = require('pg');

const pgUrl = '';

const pool = new Pool({
  connectionString: pgUrl,
});
console.log('connected');

pool.query(`CREATE TABLE IF NOT EXISTS users (
  username VARCHAR PRIMARY KEY,
  password VARCHAR NOT NULL
);`);

console.log('did first query?');

pool.query(`CREATE TABLE IF NOT EXISTS events (
  _id serial PRIMARY KEY,
  name VARCHAR NOT NULL,
  city VARCHAR NOT NULL,
  state VARCHAR NOT NULL,
  time TIMESTAMP NOT NULL,
  description VARCHAR NOT NULL,
  username VARCHAR REFERENCES users(username)
  ON DELETE CASCADE
);`);

pool.query(`CREATE TABLE IF NOT EXISTS rsvp (
  _id serial PRIMARY KEY,
  username VARCHAR REFERENCES users(username)
  ON DELETE CASCADE,
  event_id INTEGER REFERENCES events(_id)
  ON DELETE CASCADE
);`);

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
