const mysql = require('mysql');

// connection MySQL
const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    
});

db.connect(function(err) {
    if (err) 
        throw err;
    console.log("Connecté à la base de données MySQL!");
  });


  module.exports = db;