const express = require('express');
const router = express.Router({ mergeParams: true });
const commentsController = require('../controllers/commentsController');

router.get('/', commentsController.listarComentariosPost);

module.exports = router;