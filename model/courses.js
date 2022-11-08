const mongoose = require("mongoose");
var CourseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Required",
  },
  duration: {
    type: String,
  },
  Fee: {
    type: String,
  },
});

mongoose.model("Course", CourseSchema);
