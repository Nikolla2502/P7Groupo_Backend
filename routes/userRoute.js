const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/userCtrl');
const passwordValidator = require("../middleware/passwordValidator");


// creation nouvel utilisateur
router.post("/signup", passwordValidator, userCtrl.signup);

// connexion utilisateur
router.post("/login", passwordValidator, userCtrl.login);

module.exports = router;