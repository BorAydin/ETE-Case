const express = require('express');
const router = express.Router({ mergeParams: true });
const {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProduct,
} = require('../controllers/products');

router.route('/').get(getProducts).post(addProduct);

router.route('/:id').get(getProduct).put(updateProduct).delete(deleteProduct);

module.exports = router;
