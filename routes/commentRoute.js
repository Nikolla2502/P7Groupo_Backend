const express = require('express');
const router = express.Router();


const userCtrl = require('../controllers/commentCtrl');

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// creation post
router.post('/', auth, multer, CommentCtrl.createComment);
// recuperer tous les posts
router.get('/', auth, commenttCtrl.getAllComments);
// modifier un post
router.put('/:id', auth, multer, commentCtrl.modifyComment);


// admin privilege
// effacer un post
router.delete('/:id', auth, commentCtrl.deleteComment);


module.exports = router;