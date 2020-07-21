const { Pool, Client } = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "demo",
  password: "1d9e9n4i",
  port: 5432,
});

module.exports = pool;
