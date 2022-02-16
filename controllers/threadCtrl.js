const db = require('../config/mySQL');

// Les posts (subject)
// Creer un post
exports.createPost = (req, res, next) => {
    const sqlCreatePost ="INSERT INTO `subject` (id_user, title, id_type, id_category) VALUES (?, ?, ?, ?)"; 
    const createPost = [id_user, title, id_type, id_category];
    db.query(sqlCreatePost, createPost, (err, result) => {
        if (result) {
            res.status(201).json({ result });
        } else {
            res.status(400).json({ error });
        }
    });
    // Si INSERT ok, INSERT contenu dans comments, ne pas oublier de récupérer l'id du sujet (variable result.insertId)
    
};
// Recuperer tous les posts
exports.getAllPosts = (req, res) => {
    const sqlGetAllPosts ="SELECT * FROM subject WHERE show_subject=1 ORDER BY date_create DESC  LIMIT 0,10;";
        const getAllPosts = [
          req.body.id_user,
          req.body.title,
          req.body.id_category,
          req.body.show_subject,
        ];
    db.query(sqlGetAllPosts, getAllPosts, (err, result) => {
      if (result) {
        res.status(200).json({ result }); //N'oublie pas de renvoyer des données supplémentaires tel que la page courante et le nombre total de pages
      } else {
        return res.status(400).json({ message: " Publication non trouvé " });
      }
    });
};



// comments
// ajout commentaire sur un post
exports.addComment = (req, res, next) => {
    const sqlAddComment ="INSERT INTO comments (id_subject, id_user, comment) VALUES (?, ?, ?, ?) "; 
    const addComment = [id_subject, id_user, comment];

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
    const sqlModifyComment = "UPDATE comments SET 'date_modify' = NOW(), 'comment' = ? WHERE id_comment=? AND id_user=?"; 
    const modidyComment = [id_comment, id_user, comment];
    db.query(sqlModifyComment, modidyComment, (err, result) => {
      if (result) {
        res.status(201).json({ result });
      } else {
        return res.status(400).json({ message: " Requete non autorisée " });
      }
    });
};
// Comment user like dislike
exports.userLikeComment = (req, res, next) => {
  const sqlLikeDislikeComment = "INSERT INTO like_dislike (id_comment,id_user,islike) VALUES (?, ?, ?)";
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
      res.status(200).json({ message: "Publication modérée" });
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
        res.status(200).json({ message : "Publication modérée" });
      } else {
        return res.status(400).json({ message: " Publication non trouvé " });
      }
    });
};




