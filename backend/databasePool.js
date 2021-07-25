const { Pool } = require('pg');
const databaseConfig = require('./secrets/databaseConfig');

const pool = new Pool(databaseConfig);

module.exports = pool;

// pool.query('SELECT * FROM generation', (error, response) => {
//   if (error) return console.log('error', error);

//   console.log('response.rows', response.rows);
// });