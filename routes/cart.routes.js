const express = require('express');

const cartController = require('../controllers/cart.controller');

const router = express.Router();

router.post('/cart/items', cartController.addCartItem);

module.exports = router;