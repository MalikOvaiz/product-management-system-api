var Sequelize = require('sequelize');

var sequelize = new Sequelize('madercomi', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 100,
    min: 0,
    idle: 10000
  },
});

module.exports = sequelize ;