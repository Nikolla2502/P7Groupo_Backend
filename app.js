const express = require('express');
const app = express();

const path = require('path');

// prevention contre les attaques XSS dans les HTTP headers
const helmet = require('helmet');     

// Importation des routes
const userRoute = require("./routes/userRoute");
const threadRoute = require("./routes/threadRoute");


app.use(express.json()); // bodyparser deprecated

// connexion mySQL
require ('./config/mySQL.js')

// Cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
    });


app.use(helmet());


app.use('/images/posts', express.static(path.join(__dirname, 'images/posts')));


app.use('/api/user', userRoute);
app.use('/api/thread', threadRoute);

module.exports = app;