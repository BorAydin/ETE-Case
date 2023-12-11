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

router
  .route('/')
  .get(
    advancedResults(Product, {
      path: 'company',
      select: 'name, legalNumber',
    }),
    getProducts
  )
  .post(addProduct);

router.route('/:id').get(getProduct).put(updateProduct).delete(deleteProduct);

module.exports = router;
