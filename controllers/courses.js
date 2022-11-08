require('fs')
const mongoose = require("mongoose");
const express = require("express");
require('../model/courses')

const router = express.Router();
const courseModel = mongoose.model("Course" )

router.get("/list", (req, res) => {
  mongoose.connection.collection('Courses').find((err, docs)=>{
     if(!err){
          
          res.render('list',{valueTable : dbdata})
     }
  })

});

module.exports = router;
