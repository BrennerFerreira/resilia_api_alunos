require("dotenv-safe").config();
const express = require("express");

const config = require("./config/config");
const router = require("./router/router.js");

config.configDb();
const app = express();

app.use(router);

app.listen(process.env.PORT || 3001, (error) => {
  if (error) {
    console.log(`Error: ${error}`);
  }

  console.log(`Server running on port: ${process.env.PORT || 3001}`);
});
