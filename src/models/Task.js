const Sequelize = require("sequelize");
const db = require("../db/db");
const User = require("./User");

const Task = db.define("task", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  dueDate: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  userId: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: "id",
    },
  },
});

Task.belongsTo(User, { onDelete: "cascade" });

module.exports = Task;
