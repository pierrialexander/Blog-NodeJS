const express = require('express');
const router = express.Router();
const categoryModel = require('./categoryModel');
const slugify = require('slugify');

router.get("/categories", (req, res) => {
    res.send('Rota de Categorias!');
});

/**
 * Rota para criar uma nova categoria
 */
router.get('/admin/categories/new', (req, res) => {
    res.render('admin/categories/new');
});

/**
 * Rota responsável por salvar os dados do formulário de categoria.
 */
router.post('/categories/save', (req, res) => {
    var title = req.body.title;
    if(title != undefined) {
        categoryModel.create({
            title: title,
            slug: slugify(title)
        })
        .then(() => {
            res.redirect('/');
        })
    }
    else {
        res.redirect('/admin/categories/new');
    }
});

/**
 * Rota para renderizar a index de categorias
 */
 router.get('/admin/categories', (req, res) => {
    categoryModel.findAll().then(categories =>{
        res.render('admin/categories/index', {
            categories: categories
        });
    });     
});


module.exports = router;