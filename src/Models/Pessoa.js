const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); // Verifique se o caminho está correto

class Pessoa extends Model {}

Pessoa.init({
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize, // A instância do Sequelize deve ser passada aqui
  modelName: 'Pessoa',
  tableName: 'pessoas', // Use o nome da tabela em minúsculas
  timestamps: false, // Ajuste conforme necessário (true/false)
});

module.exports = Pessoa;
