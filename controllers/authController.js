const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

// Login page
router.get('/login', (req, res) => {
  res.render('index');  // your login page
});

// Signup page
router.get('/signup', (req, res) => {
  res.render('signup');
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    // TODO: Implement actual login logic with database
    res.redirect('/');  // redirect to home page after login
  } catch (error) {
    res.status(500).render('index', { error: error.message });
  }
});

router.post('/signup', async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    // TODO: Implement actual signup logic with database
    res.redirect('/auth/login');
  } catch (error) {
    res.status(500).render('signup', { error: error.message });
  }
});

module.exports = router;
