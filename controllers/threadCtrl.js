const db = require('../mySQL');

// Les posts (subject)
// Creer un post
exports.createPost = (req, res, next) => {
    const sqlCreatePost ="INSERT INTO 'subject' ('date_create', 'id_user', 'title', 'id_type', 'id_category') VALUES (?, ?, ?, ?, ?"; 
    const createPost = [date_create, id_user, title, id_type, id_category];
  db.query(sqlCreatePost, createPost, (err, result) => {
    if (result) {
      res.status(201).json({ result });
    } else {
      return res.status(400).json({ error });
    }
    });
    // Si INSERT ok, INSERT contenu dans comments, ne pas oublier de récupérer l'id du sujet (variable result.insertId)
    
};
// Recuperer tous les posts
exports.getAllPosts = (req, res, next) => {
    const sqlGetAllPosts = "SELECT * FROM subject LIMIT 50 ORDER BY date_create DESC";
  const getAllPosts = [id_user, title, id_category, show_subject];
    db.query(sqlGetAllPosts, getAllPosts, (err, result) => {
      if (result) {
        res.status(201).json({ result }); //N'oublie pas de renvoyer des données supplémentaires tel que la page courante et le nombre total de pages
      } else {
        return res.status(400).json({ error });
      }
    });
};



// comments
// ajout commentaire sur un post
exports.addComment = (req, res, next) => {
    const sqlAddComment ="INSERT INTO comments ('date_create', id_subject, 'id_user', 'comment') VALUES (?, ?, ?, ?) "; 
    const addComment = [date_create, id_subject, id_user, comment];

    db.query(sqlAddComment, addComment, (err, result) => {
      if (result) {
        res.status(201).json({ result });
      } else {
        return res.status(400).json({ message: " Publication non trouvé " });
      }
    });

};
// Modifier commentaire sur un post
exports.modifyComment = (req, res, next) => {
    const sqlModifyComment = "UPDATE comments SET 'date_modify' = ?, 'comment' = ? WHERE id_comment=? AND id_user=?"; 
    const modidyComment = [id_comment, id_user, comment];
    db.query(sqlModifyComment, modidyComment, (err, result) => {
      if (result) {
        res.status(201).json({ result });
      } else {
        return res.status(400).json({ message: " Publication non trouvé " });
      }
    });
};
// Comment user like dislike
exports.userLikeComment = (req, res, next) => {
  const sqlLikeDislikeComment = "INSERT INTO 'like_dislike' ('id_comment','id_user','islike') VALUES (?, ?, ?";
  const likeDislikeComment = [id_comment, id_user, islike];
  db.query(sqlLikeDislikeComment, likeDislikeComment, (err, result) => {
    if (islike === 1) {
      
    }
  });
};
// **********************Admin Privilege ****************************************************

// delete post
exports.deletePost = (req, res, next) => {
  const sqldeletePost ="UPDATE subject SET `show_subject`= 0 WHERE id_subject=?";
  const deletePost = [show_subject];

  db.query(sqldeletePost, deletePost, (err, result) => {
    if (result) {
      res.status(201).json({ result });
    } else {
      return res.status(400).json({ message: " Publication non trouvé " });
    }
  });
};

// delete comment
exports.deleteComment = (req, res, next) => {
  const sqldeleteComment = "UPDATE comments SET `show_comment`= 0 WHERE id_comment=?";
  const deleteComment = [show_comment];
    db.query(sqldeleteComment, deleteComment, (err, result) => {
      if (result) {
        res.status(201).json({ result });
      } else {
        return res.status(400).json({ message: " Publication non trouvé " });
      }
    });
};




