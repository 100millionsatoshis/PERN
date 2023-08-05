const { Pool } = require("pg");
const pool = new Pool({
  user: "founder",
  host: "localhost",
  database: "marra",
  password: "zx90as89qw78",
  port: 5432
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
