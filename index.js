const connection = require("./model");
const express = require("express");
const app = express();
const path = require("path");
const hbs = require("express-handlebars");
const bodyparser = require("body-parser");

app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send("home page");
});

app.listen("3000", () => {
  console.log("server started");
});
