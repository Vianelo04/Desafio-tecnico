const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');

router.get('/', postsController.listarPosts);
router.get('/:id', postsController.obterPosts);


module.exports = router;