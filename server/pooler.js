// // const { Pool } = require('pg');

// const PG_URI = 'postgres://gjbzhjyf:cYlCYlIU4kBSCAo_9UDsOXMVBhjkaOLd@stampy.db.elephantsql.com/gjbzhjyf'; //ping pong database database

// // create a new pool here using the connection string above
// const pool = new Pool({
//   connectionString: PG_URI
// });

// //export
// module.exports = {
//     query: (text, params, callback) => {
//       console.log('executed query', text);
//       return pool.query(text, params, callback);
//     }
//   };