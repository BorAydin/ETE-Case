const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Product = require('../models/Product');
const Company = require('../models/Company');

// @desc    Get products
// @route   GET /api/v1/products
// @route   GET /api/v1/companies/:companyId/products
// @access  Public
exports.getProducts = asyncHandler(async (req, res, next) => {
  if (req.params.companyId) {
    const products = Product.find({ company: req.params.companyId });

    return res.status(200).json({
      succces: true,
      count: products.length,
      data: products,
    });
  } else {
    res.status(200).json(res.advancedResults);
  }
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
  const product = await Product.create(req.body);

  res.status(200).json({
    success: true,
    data: product,
  });
});

// @desc    Update product
// @route   PUT /api/v1/products/:id
// @access  Private
exports.updateProduct = asyncHandler(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorResponse(`Bu ${req.params.id}'li ürün yok.`), 404);
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: product,
  });
});

// desc     Delete product
// @route   DELETE api/v1/products/:id
// access   Private
exports.deleteProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findByIdAndDelete(req.params.id);

  if (!product) {
    return next(new ErrorResponse(`${req.params.id}'li ürün bulunamadı.`, 404));
  }

  res.status(200).json({ succces: true, data: {} });
});
