const Sequelize = require('sequelize');
const sequelize = new Sequelize('perfect_manager', process.env.DB_USER, '', {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT
});

module.exports = sequelize;