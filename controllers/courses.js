const mongoose = require("mongoose");
const express = require("express");

const router = express.Router();
const courseModel = mongoose.model("Course" )

router.get("/list", (req, res) => {
  courseModel.find((err, docs)=>{
     if(!err){
          res.send('working')
     }
  })

});

module.exports = router;
