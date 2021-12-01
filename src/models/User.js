const Sequelize = require("sequelize");
const db = require("../db/db");

const User = db.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  firstDay: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

module.exports = User;
