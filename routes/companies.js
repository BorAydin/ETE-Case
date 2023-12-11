const express = require('express');
const router = express.Router();
const {
  getCompanies,
  createCompany,
  updateCompany,
  deleteCompany,
  getCompany,
} = require('../controllers/companies');

// Include other resource router
const productsRouter = require('./products');

// Re-route into other resource routers
router.use('/:companyId/products', productsRouter);

router.route('/').get(getCompanies).post(createCompany);

router.route('/:id').get(getCompany).put(updateCompany).delete(deleteCompany);

module.exports = router;
