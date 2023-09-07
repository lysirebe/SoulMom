// require("dotenv").config();
const Pool = require('pg').Pool


const pool = new Pool({
  user: "postgres",
  password: "1234",
  host: "localhost",
  // host:"db",
  port: 5432,
  database: "soulmom",
});

module.exports = pool;
