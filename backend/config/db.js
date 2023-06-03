// require("dotenv").config();
const Pool = require('pg').Pool


const pool = new Pool({
  user: "postgres",
  password: "1234",
  host: "localhost",
  port: "3000",
  database: "soulmom"
});

module.exports = pool;
