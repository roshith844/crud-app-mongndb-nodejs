const express = require("express");
const router = express.Router();
const User = require('../models/users')
const session = require("express-session");

// Middlewares
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.use(
  session({
    secret: "secret",
    saveUninitialized: true,
    resave: false,
  })
);

// Routes
router.get("/", (req, res) => {
     res.render('index', { title: 'CRUD APP'})
   });

router.get("/users", (req, res) => {
  res.send("All users");
});

router.get('/add', (req, res)=>{
  res.render('add_users', {title: 'add users'})
})

router.post('/add', (req, res)=>{
  const user = new User({
    name : req.body.name,
    email : req.body.email,
    phone : req.body.phone
  })
  user.save((err)=>{
    if(err){
      res.json({message: err.message, type: 'danger'})
    }else{
      req.session.message ={
        type: 'success',
        message: 'Users added succussfully'
      }
      res.redirect('/')
    }
  })
})

module.exports = router;
