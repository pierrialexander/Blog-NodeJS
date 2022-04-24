const Sequelize = require("sequelize");
const connection = new Sequelize('blog_press', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;