const db = require('../mySQL');

// creer un post
exports.createPost = (req, res, next) => {
    const sqlCreatePost = "INSERT INTO 'subject' ('date_modify', 'id_user', 'title', 'id_type', 'id_category')"; // Penser à renseigner les valeurs
    db.query(sqlCreatePost, [], (err, result) => {
        // Si INSERT ok, INSERT contenu dans comments, ne pas oublier de récupérer l'id du sujet (variable result.insertId)
    })

};

// recuperer tous les posts
exports.getAllPosts = (req, res, next) => {
    const sqlGetAllPosts = "SELECT * FROM subject"
    db.query(sqlGetAllPosts,[],(err,result) => {
        if (result) {
            res.status(201).json({result})
        } else {
           return res.status(400).json({error})
        }
    })

};

// ajout commentaire sur un post
exports.addComment = (req, res, next) => {
    const sqlAddComment = "INSERT INTO comments ('date_create', 'comment', 'id_user') WHERE id_subject=?"; 
    db.query(sqlAddComment,[],(err,result) => {
        if(result) {
            res.status(201).json({result})
        } else {
            return res.status(400).json({message:' Publication non trouvé '})
        }
    })

};

// MODIFIER commentaire sur un post
exports.addComment = (req, res, next) => {
    const sqlAddComment = "UPDATE INTO comments ('date_modify', 'comment', 'id_user') WHERE id_subject=?"; 
    db.query(sqlAddComment,[],(err,result) => {
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


// delete post admin privilege
exports.deletePost = (req, res, next) => {
    const sqldeletePost = "SELECT * FROM 'subject' WHERE id_subject=?"
};