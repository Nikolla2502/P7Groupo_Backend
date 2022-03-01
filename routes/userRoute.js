const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/userCtrl");
// const passwordValidator = require("../middleware/passwordValidator");

// creation nouvel utilisateur
router.post("/signup", userCtrl.signup);

// connexion utilisateur
router.post("/login",userCtrl.login);


// acces profil
router.get("/:id", userCtrl.profil);

// suppression utilisateur
router.post("/:id", userCtrl.moderateUser);

// OBTENIR LA LISTE DES USERS
router.get("/", userCtrl.getAllUsers);



module.exports = router;
