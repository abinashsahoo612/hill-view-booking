import mysql from 'mysql2/promise';


let pool;
if (!global._mysqlPool) {
// pool = mysql.createPool({
// host: process.env.DB_HOST,
// user: process.env.DB_USER,
// password: process.env.DB_PASSWORD,
// database: process.env.DB_NAME,
// port: process.env.DB_PORT || 3306,
// waitForConnections: true,
// connectionLimit: 10,
// queueLimit: 0,
// });

 pool = mysql.createPool({
  host: process.env.MYSQLHOST,
  port: process.env.MYSQLPORT,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  waitForConnections: true,
  connectionLimit: 10,
});

global._mysqlPool = pool;
} else {
pool = global._mysqlPool;
}


export { pool };