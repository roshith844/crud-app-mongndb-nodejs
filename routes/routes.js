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

router.get("/users", (req, res) => {
  res.send("All users");
});

module.exports = router;
