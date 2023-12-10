const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Product = require('../models/Product');

// @desc    Get products
// @route   GET /api/v1/products
// @route   GET /api/v1/companies/:companyId/products
// @access  Public
exports.getProducts = asyncHandler(async (req, res, next) => {});

// @desc    Get single product
// @route   GET /api/v1/products/:id
// @access  Public
exports.getProduct = asyncHandler(async (req, res, next) => {});

// @desc    Add single products
// @route   POST /api/v1/companies/:companyId/products
// @access  Private
exports.addProduct = asyncHandler(async (req, res, next) => {});

// @desc    Update product
// @route   PUT /api/v1/product/:id
// @access  Private
exports.updateProduct = asyncHandler(async (req, res, next) => {});

// desc     Delete product
// @route   DELETE api/v1/product/:id
// access   Private
exports.deleteProduct = asyncHandler(async (req, res, next) => {});
