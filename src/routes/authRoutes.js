const authMiddleware = require("../middleware/authMiddleware");
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// test route
router.get('/test', (req, res) => {
  res.send('Auth API working');
});

// register
router.post('/register', authController.register);

// login  ✅ THIS WAS MISSING OR NOT SAVED
router.post('/login', authController.login);

router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Welcome! This is a protected route ✅",
    user: req.user,
  });
});

module.exports = router;