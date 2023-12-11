const express = require('express');
const router = express.Router();
const {
  getCompanies,
  createCompany,
  updateCompany,
  deleteCompany,
  getCompany,
} = require('../controllers/companies');
const advancedResults = require('../middleware/advancedResults');
const Company = require('../models/Company');

// Include other resource router
const productsRouter = require('./products');

const { protect } = require('../middleware/auth');

// Re-route into other resource routers
router.use('/:companyId/products', productsRouter);

router
  .route('/')
  .get(advancedResults(Company, 'products'), getCompanies)
  .post(protect, createCompany);

router
  .route('/:id')
  .get(getCompany)
  .put(protect, updateCompany)
  .delete(protect, deleteCompany);

module.exports = router;
