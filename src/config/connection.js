const { Sequelize } = require('sequelize');

// Substitua com suas credenciais do PostgreSQL
const sequelize = new Sequelize('trabalhofullstack', 'postgres', 'senha', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false, // Desative o log SQL, se preferir
});

module.exports = sequelize;
