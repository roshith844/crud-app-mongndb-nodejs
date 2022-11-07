const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 4000;

// Router prefix
app.use("", require("./routes/routes"));

app.use((req, res, next)=>{
  res.locals.message = req.session.message
  delete req.session.message
  next()
})
// Sets View Engine
app.set("view engine", "ejs");

// Connects MongoDB Database
mongoose.connect("mongodb://localhost:27017/crud");
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("connected to database"));

// Server
app.listen(PORT, () => {
  console.log("server started");
});
