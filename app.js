const express = require('express');
const mysql = require('mysql');
const app = express();


// liaison fichier environneemet
require('dotenv').config()


// connection MySQL
const db = mysql.createConnection({
    host: "localhost",
    user: process.env.USER,
    password: process.env.PASSWORD,
    
});

db.connect(function(err) {
    if (err) throw err;
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









module.exports = app;