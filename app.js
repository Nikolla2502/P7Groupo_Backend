const express = require('express');
const app = express();
app.use(express.json()); // bodyparser deprecated

const path = require('path');
const helmet = require('helmet');     // prevention contre les attaques XSS dans les HTTP headers
const mysql = require('mysql');

// liaison fichier environnemet
require('dotenv').config()


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


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
    });


app.use((req, res) => {
    res.json({ message: 'Votre requête a bien été reçue !' });
    });


    app.use(helmet());


app.use('/images/posts', express.static(path.join(__dirname, 'images/posts')));



module.exports = app;