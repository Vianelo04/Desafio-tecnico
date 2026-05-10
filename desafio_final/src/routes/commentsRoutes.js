const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');

router.get('/posts/:postId/comments', commentsController.listarComentariosPost);
router.post('/posts/:postId/comments', commentsController.criarComentario);
router.delete('/comments/:id', commentsController.deletarComentario);


module.exports = router;