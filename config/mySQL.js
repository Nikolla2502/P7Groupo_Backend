const mysql = require('mysql');

// liaison fichier environnemet
require("dotenv").config({ path: "./config/.env" });

// connection MySQL
const db = mysql.createConnection({
  host: process.env.HOST,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
});

db.connect(function(err) {
    if (err) 
        throw err;
    console.log("Connecté à la base de données MySQL!");
  });


  module.exports = db;