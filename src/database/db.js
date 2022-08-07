const Sequelize = require('sequelize');
const sequelize = new Sequelize('perfect_manager', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
    password: '12345678',
    port: 3306
});

module.exports = sequelize;