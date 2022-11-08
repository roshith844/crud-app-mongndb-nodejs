const connection = require("./model");
const express = require("express");
const app = express();
const path = require("path");
const exphbs = require("express-handlebars");
const bodyparser = require("body-parser");
const courseController = require("./controllers/courses");
app.use("/course", courseController);
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);

app.set("views", path.join(__dirname, "/views/")); // setting views

app.engine(
  "hbs",
  exphbs.engine({
    extname: "hbs"
  })
);

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.send("home page");
});

app.listen("4000", () => {
  console.log("server started");
});
