const Company = require('../models/Company');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

// desc     Get all companies
// @route   GET api/v1/companies
// access   Public
exports.getCompanies = asyncHandler(async (req, res, next) => {});

// desc     Get single company
// @route   GET api/v1/companies/:id
// access   Public
exports.getCompany = asyncHandler(async (req, res, next) => {});

// desc     Create new company
// @route   POST api/v1/companies
// access   Private
exports.createCompany = asyncHandler(async (req, res, next) => {
  const company = await Company.create(req.body);

  res.status(201).json({
    succces: true,
    data: company,
  });
});

// desc     Update company
// @route   PUT api/v1/companies/:id
// access   Private
exports.updateCompany = asyncHandler(async (req, res, next) => {});

// desc     Delete company
// @route   DELETE api/v1/companies/:id
// access   Private
exports.deleteCompany = asyncHandler(async (req, res, next) => {});
