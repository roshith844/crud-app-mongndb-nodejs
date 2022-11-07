const mongoose = require("mongoose");
var CourseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Required",
  },
  id: {
    type: String,
  },
  duration: {
    type: String,
  },
  Fee: {
    type: String,
  },
});

mongoose.model("Course", CourseSchema);
