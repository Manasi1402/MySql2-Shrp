const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', '@Katty2714', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
