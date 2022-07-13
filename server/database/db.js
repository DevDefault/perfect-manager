const Sequelize = require('sequelize');
const sequelize = new Sequelize('perfect_manager', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
});

module.exports = sequelize;