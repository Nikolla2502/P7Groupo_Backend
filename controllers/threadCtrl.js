const db = require('../mySQL');

// Les posts (subject)
// Creer un post
exports.createPost = (req, res, next) => {
    const sqlCreatePost ="INSERT INTO 'subject' ('date_create', 'id_user', 'title', 'id_type', 'id_category')"; 
    const createPost = [id_user, title, id_type, id_category];
    db.query(sqlCreatePost, createPost, (err, result) => {
      // Si INSERT ok, INSERT contenu dans comments, ne pas oublier de récupérer l'id du sujet (variable result.insertId)
    });

};
// Recuperer tous les posts
exports.getAllPosts = (req, res, next) => {
    const sqlGetAllPosts = "SELECT * FROM subject LIMIT 50 ORDER BY date_create DESC";
    const getAllPosts = [id_user, title, id_category, show_subject]
    db.query(sqlGetAllPosts, getAllPosts, (err, result) => {
      if (result) {
        res.status(201).json({ result }); //N'oublie pas de renvoyer des données supplémentaires tel que la page courante et le nombre total de pages
      } else {
        return res.status(400).json({ error });
      }
    });
};
// Post user like dislike
exports.userLikePost = (req, res, next) => {

};


// comments
// ajout commentaire sur un post
exports.addComment = (req, res, next) => {
    const sqlAddComment ="INSERT INTO comments ('date_create', 'id_user', 'comment') "; 
    const addComment = [id_user, comment];

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
    const sqlModifyComment = "UPDATE comments SET 'date_modify' = ?, 'comment' = ? WHERE id_comment=?"; 
    const modidyComment = [comment];
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




