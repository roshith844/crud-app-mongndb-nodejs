const express = require("express");
const router = express.Router();
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

module.exports = router;
