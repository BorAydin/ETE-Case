const express = require('express');
const router = express.Router({ mergeParams: true });
const {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProduct,
} = require('../controllers/products');
const advancedResults = require('../middleware/advancedResults');
const Product = require('../models/Product');
const { protect } = require('../middleware/auth');

router
  .route('/')
  .get(
    advancedResults(Product, {
      path: 'company',
      select: 'name, legalNumber',
    }),
    getProducts
  )
  .post(protect, addProduct);

router
  .route('/:id')
  .get(getProduct)
  .put(protect, updateProduct)
  .delete(protect, deleteProduct);

module.exports = router;
