

// const mysql = require("mysql2/promise");
// require("dotenv").config();

// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   port: Number(process.env.DB_PORT) || 3306,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,

//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });

// const testDatabaseConnection = async () => {
//   try {
//     const connection = await pool.getConnection();

//     console.log("MySQL database connected successfully");
//     console.log("Database:", process.env.DB_NAME);

//     connection.release();
//   } catch (error) {
//     console.error("MySQL connection failed:", error.message);
//     throw error;
//   }
// };

// module.exports = {
//   pool,
//   testDatabaseConnection,
// };



const mysql = require("mysql2/promise");
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || process.env.MYSQLHOST,
  port: Number(process.env.DB_PORT || process.env.MYSQLPORT || 3306),
  user: process.env.DB_USER || process.env.MYSQLUSER,
  password: process.env.DB_PASSWORD || process.env.MYSQLPASSWORD,
  database: process.env.DB_NAME || process.env.MYSQLDATABASE,

  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const testDatabaseConnection = async () => {
  try {
    const connection = await pool.getConnection();

    console.log("MySQL database connected successfully");
    console.log("Host:", process.env.DB_HOST || process.env.MYSQLHOST);
    console.log("Database:", process.env.DB_NAME || process.env.MYSQLDATABASE);

    connection.release();
  } catch (error) {
    console.error("MySQL connection failed:", error.message);
    throw error;
  }
};

module.exports = {
  pool,
  testDatabaseConnection,
};
