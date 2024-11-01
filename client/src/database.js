import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql
  .createPool({
    // host: process.env.MYAQL_HOST,
    // user: process.env.MYSQL_USER,
    // database: process.env.MYSQL_DATABASE,
    // password: process.env.MYSQL_PASSWORD,
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "notes_app",
  })
  .promise(); //for async and await

const result = await pool.query("SELECT * FROM notes");
console.log(result);
