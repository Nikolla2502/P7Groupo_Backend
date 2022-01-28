const express = require('express');
const router = express.Router();


const threadCtrl = require("../controllers/threadCtrl");

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// creation post
router.post('/', auth, multer, threadCtrl.createPost);
// recuperer tous les posts
router.get('/', auth, threadCtrl.getAllPosts);
// modifier un post
router.put('/:id', auth, multer, threadCtrl.modifyPost);
// like dislike
router.post("/:id/like", auth, threadCtrl.userLikePost);

// admin privilege
// effacer un post
router.delete('/:id', auth, threadCtrl.deletePost);


module.exports = router;