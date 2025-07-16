const express = require('express');
const router = express.Router();

const articleControlers = require('../controllers/articleController');

router.get('/', articleControlers.getAllArticles);
router.get('/:id', articleControlers.getArticleById);
router.post('/', articleControlers.createArticle);
router.put('/:id', articleControlers.updateArticle);
router.delete('/:id', articleControlers.deleteArticle);

module.exports = router;
