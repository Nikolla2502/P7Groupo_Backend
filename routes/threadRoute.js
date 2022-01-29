const express = require('express');
const router = express.Router();

const threadCtrl = require("../controllers/threadCtrl");

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
// Les posts (subject)
// creation post
router.post('/', auth, multer, threadCtrl.createPost);

// recuperer tous les posts
router.get('/', auth, threadCtrl.getAllPosts);

// like dislike
router.post("/:id/like", auth, threadCtrl.userLikePost);

// Les commentaires (comments)
// ajout commentaire sur un post
router.post('/:id', auth, multer, threadCtrl.addComment);
// modifier un commentaires
router.put('/:id', auth, multer, threadCtrl.modifyComment);
// like dislike
router.post("/:id/like", auth, threadCtrl.userLikeComment);

// admin privilege
// effacer un post
router.delete('/:id', auth, threadCtrl.deletePost);
router.delete('/', auth, threadCtrl.deleteComment);



module.exports = router;