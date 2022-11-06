const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const app = express();
const PORT = process.env.PORT || 4000;

// Connect MongoDB Database
mongoose.connect("mongodb://localhost:27017");
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("connected to database"));

// Routes
app.get("/", (req, res) => {
  res.send("working");
});

// Server
app.listen(PORT, () => {
  console.log("server started");
});
