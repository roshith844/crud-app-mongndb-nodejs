const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/School", (error) => {
  if (!error) {
    console.log("connected to database");
  } else {
    console.log(" Error connecting to database");
  }
});

const Course = require("./courses");
