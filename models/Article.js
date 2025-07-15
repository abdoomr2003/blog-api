const {DataTypes} = require('sequelize');

const {sequelize} = require('../config/db');
const sqluelize = require('../config/db');

const Article = sqluelize.define('Article', {
    title: {
        type: DataTypes.STRING,
        allowNull: false  
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    tages: {
        type: DataTypes.STRING,
    },
    publishedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});
module.exports = Article;