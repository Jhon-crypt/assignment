const express = require('express');
const router = express.Router();

// Products page
router.get('/', (req, res) => {
  res.render('product');
});

router.get('/:id', (req, res) => {
  try {
    const productId = req.params.id;
    // TODO: Implement get product details logic
    res.render('product', { productId });
  } catch (error) {
    res.status(500).render('product', { error: error.message });
  }
});

module.exports = router;
