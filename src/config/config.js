const configDb = async () => {
  const db = require("../db/db");
  const User = require("../models/User");
  const Task = require("../models/Task");

  try {
    const result = await db.sync();
    console.log(`DB sync result: ${result}`);
  } catch (err) {
    console.log(`DB sync error: ${err}`);
  }
};

module.exports = {
  configDb,
};
