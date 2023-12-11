const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Product = require('../models/Product');
const Company = require('../models/Company');

// @desc    Get products
// @route   GET /api/v1/products
// @route   GET /api/v1/companies/:companyId/products
// @access  Public
exports.getProducts = asyncHandler(async (req, res, next) => {
  let query;

  if (req.params.companyId) {
    query = Product.find({ company: req.params.companyId });
  } else {
    query = Product.find().populate({
      path: 'company',
      select: 'name, legalNumber',
    });
  }

  const products = await query;

  res.status(200).json({
    success: true,
    count: products.length,
    data: products,
  });
});

// @desc    Get single product
// @route   GET /api/v1/products/:id
// @access  Public
exports.getProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id).populate({
    path: 'company',
    select: 'name, legalNumber',
  });

  if (!product) {
    return next(new ErrorResponse(`Bu ${req.params.id}'li ürün yok.`), 404);
  }

  res.status(200).json({
    success: true,
    data: product,
  });
});

// @desc    Add single products
// @route   POST /api/v1/companies/:companyId/products
// @access  Private
exports.addProduct = asyncHandler(async (req, res, next) => {
  req.body.company = req.params.companyId;

  const company = await Company.findById(req.body.company);

  if (!company) {
    return next(
      new ErrorResponse(`Bu ${req.body.company}'li şirket yok.`),
      404
    );
  }

  const product = await Product.create(req.body);

  res.status(200).json({
    success: true,
    data: product,
  });
});

// @desc    Update product
// @route   PUT /api/v1/product/:id
// @access  Private
exports.updateProduct = asyncHandler(async (req, res, next) => {});

// desc     Delete product
// @route   DELETE api/v1/product/:id
// access   Private
exports.deleteProduct = asyncHandler(async (req, res, next) => {});
