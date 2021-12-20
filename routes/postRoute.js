const express = require('express');
const router = express.Router();


const userCtrl = require('../controllers/postCtrl');

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// creation post
router.post('/', auth, multer, postCtrl.createPost);
// recuperer tous les posts
router.get('/', auth, postCtrl.getAllPosts);
// modifier un post
router.put('/:id', auth, multer, postCtrl.modifyPost);
// like dislike
router.post("/:id/like", auth, postCtrl.userLikePost);

// admin privilege
// effacer un post
router.delete('/:id', auth, postCtrl.deletePost);


module.exports = router;