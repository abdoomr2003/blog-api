const Article = require('../models/Article');

exports.getAllArticles = async (req, res) => {
    const articles = await Article.findAll();
    res.json(articles);
};

exports.getArticleById = async (req, res) => {
    const article = await Article.findByPk(req.params.id);
    if (article) res.json(article);
    else res.status(404).json({message: 'Article not found'});
};

exports.createArticle = async (req, res) => {
    const article = await Article.create(req.body);
    res.status(201).json(article);
};

exports.updateArticle = async (req, res) => {
    const article = await Article.findByPk(req.params.id);
    if (!article) res.status(404).json({message: 'Article not found'});

    await article.update(req.body);
    res.json(article);
};

exports.deleteArticle = async (req, res) => {
    const deleted = await Article.destroy({where: {id: req.params.id}});
    if (deleted) res.json({message: 'Deleted'});
    else res.status(404).json({ message: 'Not found' });
};
