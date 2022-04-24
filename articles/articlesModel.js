const Sequelize = require('sequelize');
const connection = require('../database/database');
const modelCategory = require('../categories/categoryModel');

// Criação da tabela articles.
const Article = connection.define('articles', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

// RELACIONAMENTOS
// UMA categoria tem MUITOS artigos. 1-P-M
modelCategory.hasMany(Article);
// UM artigo pertence a UMA categoria. 1-P-1
Article.belongsTo(modelCategory);

// Força a criação da tabela caso não exista.
// Article.sync({force: false}).then(() => {
//     console.log("Tabela Articles Criada");
// });

// Exportando o model de artigo.
module.exports = Article;
