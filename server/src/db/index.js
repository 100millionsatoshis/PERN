require('dotenv').config();

const { Pool } = require("pg");
const pool = new Pool({
  user: "founder",
  host: "localhost",
  database: "marra",
  password: process.env.DB_PASSWORD,
  port: 5432
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
