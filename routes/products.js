const express = require('express');
const router = express.Router();

router.route('/').get(getProducts).post(addProduct);

router.route('/:id').get(getProduct).put(updateProduct).delete(deleteProduct);

module.exports = router;
