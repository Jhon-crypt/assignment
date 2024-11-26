const express = require('express');
const router = express.Router();

// Payment page
router.get('/', (req, res) => {
  res.render('payment');
});

// PayNow page
router.get('/paynow', (req, res) => {
  res.render('paynow');
});

// Digital wallet page
router.get('/wallet', (req, res) => {
  res.render('option2');
});

router.post('/process', (req, res) => {
  try {
    const { paymentMethod, amount } = req.body;
    // TODO: Implement payment processing logic
    res.redirect('/payment/success');
  } catch (error) {
    res.status(500).render('payment', { error: error.message });
  }
});

module.exports = router;
