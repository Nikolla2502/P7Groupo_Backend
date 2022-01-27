const db = require('../mySQL');

// creer un post
exports.createPost = (req, res, next) => {
    const sqlCreatePost = "INSERT INTO 'subject' ('date_modify', 'id_user', 'title', 'id_type', 'id_category')"; // Penser à renseigner les valeurs
    const createPost = [id_user, title, id_type, id_category];

    db.query(sqlCreatePost, createPost, (err, result) => {
      // Si INSERT ok, INSERT contenu dans comments, ne pas oublier de récupérer l'id du sujet (variable result.insertId)
    });

};

// recuperer tous les posts
exports.getAllPosts = (req, res, next) => {
    const sqlGetAllPosts = "SELECT * FROM subject";
    db.query(sqlGetAllPosts,[],(err,result) => {
        if (result) {
            res.status(201).json({result})//N'oublie pas de renvoyer des données supplémentaires tel que la page courante et le nombre total de pages
        } else {
           return res.status(400).json({error})
        }
    })

};

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
    db.query(sqlModifyComment,[],(err,result) => {
        if(result) {
            res.status(201).json({result})
        } else {
            return res.status(400).json({message:' Publication non trouvé '})
        }
    })

};

// user like dislike
exports.userLikePost = (req, res, next) => {

};

// **********************Admin Privilege ****************************************************

// delete post
exports.deletePost = (req, res, next) => {
    const sqldeletePost = "UPDATE subject SET `show_subject`= 0 WHERE id_subject=?";
    // const queryData = [
    //     val1,
    //     val2,
    //     etc...
    // ];
    
    db.query(sqldeletePost, queryData, (err, result) => {
        if (result) {
            res.status(201).json({ result });
        } else {
            return res.status(400).json({ message: " Publication non trouvé " });
        }
    })
};

// delete comment
exports.deleteComment = (req, res, next) => {
    const sqldeleteComment ="UPDATE comments SET `show_comment`= 0 WHERE id_comment=?";
    db.query(sqldeleteComment, [], (err, result) => {
        if (result) {
            res.status(201).json({ result });
        } else {
            return res.status(400).json({ message: " Publication non trouvé " });
        }
    })
};




