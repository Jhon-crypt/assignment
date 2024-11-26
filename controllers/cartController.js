const express = require('express');
const router = express.Router();

// Cart page
router.get('/', (req, res) => {
  res.render('cart');
});

router.post('/add', (req, res) => {
  try {
    const { productId, quantity } = req.body;
    // TODO: Implement add to cart logic
    res.redirect('/cart');
  } catch (error) {
    res.status(500).render('cart', { error: error.message });
  }
});

module.exports = router;
