const { Pool } = require('pg');

const pool = new Pool({
  user: 'your_username',  // your database username
  host: 'localhost',      // database host
  database: 'loan_erp',   // your database name
  password: 'your_password', // your database password
  port: 5432,             // database port
});

module.exports = pool;