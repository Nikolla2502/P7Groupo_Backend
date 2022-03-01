const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../config/mySQL");

// declaration de dotenv pour la recuperation des donnees 'token' du fichier .env
require("dotenv").config();

// creation d'un nouvel utilisateur
exports.signup = (req, res) => {
  const sqlCreateUser =
    "INSERT INTO user (`pseudo`,`email`,`password`) VALUES (?, ?, ?)";
  bcrypt
    .hash(req.body.password, 10) // on hash le mot de passe 10 fois
    .then((hash) => {
      db.query(
        sqlCreateUser,
        [req.body.pseudo, req.body.email, hash],
        (err, result) => {
          if (result) {
            res.status(201).json({ message: "Utilisateur créé" });
          } else {
            return res.status(400).json({ err });
          }
        }
      ).catch((error) => res.status(400).json({ error }));
    });
};

// connexion d'un utilisateur existant
exports.login = (req, res) => {
  const sqlLoginUser = "SELECT * FROM user WHERE email=?";

  db.query(sqlLoginUser, [], (err, result) => {
    if (result) {
      bcrypt
      .compare(req.body.password, user.password) // bcrypt compare le password de l'utilisateur avec le password stocke dans la bdd
      .then((valid) => {
        if (!valid) {
          return res.status(401).json({ error: "Mot de passe Incorrect" });
        }
        res.status(200).json({
          userId: user._id,
          token: jwt.sign({ userId: user._id }, process.env.TOKEN, {
            expiresIn: "24h",
          }),
        });
      })
      .catch((err) => res.status(400).json({ error }));
    } else {
    return res.status(400).json({ message: "Utilisateur inexistant !" });
    }
  });
};

// rendre inactif d'un utilisateur
exports.moderateUser = (req, res) => {
  const sqlModerateUser = "UPDATE user SET statut =1 where id_user=?";

  db.query(sqlModerateUser, [], (err, result) => {
    if (err) {
      return res.status(400).json({ message: "Utilisateur non trouvé !" });
    } else {
      res.status(200).json({ message: "Utilisateur moderé !" });
    }
  });
};
// Acces profil
exports.profil = (req, res) => {
  const sqlUserProfil = "SELECT * FROM USER WHERE user_id=?"
  const getUserProfil = [];
  db.query(sqlUserProfil, getUserProfil, (err, profil) => {
              if (profil) {
                res.status(200).json({ profil });
              } else {
                return res.status(400).json({ err});
              }
    });
}
// obtenir tous les users 
exports.getAllUsers = (req, res) => {
  const sqlGetAllUsers = "SELECT pseudo,email,id_role,statut FROM user;";
  const getAllUsers = [];
      db.query(sqlGetAllUsers, getAllUsers, (err, user) => {
        if (user) {
          res.status(200).json({ user }); 
        } else {
          return res.status(400).json({ error });
        }
      });
}