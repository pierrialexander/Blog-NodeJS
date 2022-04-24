const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require('./database/database');
const categoriesController = require('./categories/categoriesController');
const articlesController = require('./articles/articlesController')
const ArticleModel = require('./articles/articlesModel');
const CategoryModel = require('./categories/categoryModel');

// View Engine
app.set('view engine', 'ejs');

// Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Database Authenticate.
connection
        .authenticate()
        .then(() => {
            console.log('Conexão realizada com sucesso!');
        })
        .catch((error) => {
            console.log('Falha na conexão')
        });
// Dizendo para a aplicação utilizar as rotas de controller de categorias.
app.use('/', categoriesController);        
// Dizendo para a aplicação utilizar as rotas de controller de artigos.
app.use('/', articlesController);

// Static
app.use(express.static('public'));

/**
 * Rota principal
 */
app.get("/", (req, res) => {
    res.render('index');
});

/**
 * Levanta o Servidor
 */
app.listen(8080, () => {
    console.log("O Servidor está rodando na porta 8080");
});

