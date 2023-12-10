const Company = require('../models/Company');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

// desc     Get all companies
// @route   GET api/v1/companies
// access   Public
exports.getCompanies = asyncHandler(async (req, res, next) => {
  let query;

  // Copy req.query
  const reqQuery = { ...req.query };

  // Fields to exclude
  const removeFields = ['select', 'sort', 'page', 'limit'];

  // Loop over removeFields and delete them from reqQuery
  removeFields.forEach((param) => delete reqQuery[param]);

  // Create query string
  let queryStr = JSON.stringify(reqQuery);

  // Create operators ($gt, $gte, $lt, $lte, $in)
  queryStr = queryStr.replace(
    /\b(gt|gte|lt|lte|in)\b/g,
    (match) => `$${match}`
  );

  // Finding resource
  query = Company.find(JSON.parse(queryStr));

  // Select Fields
  if (req.query.select) {
    const fields = req.query.select.split(',').join(' ');
    query = query.select(fields);
  }

  // Sort Fields
  if (req.query.sort) {
    const sortBy = req.query.sort.split(',').join(' ');
    query = query.sort(sortBy);
  } else {
    query = query.sort('-createdAt');
  }

  // Pagination
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await Company.countDocuments(JSON.parse(queryStr));

  query = query.skip(startIndex).limit(limit);

  // Executing query
  const companies = await query;

  // Pagination result
  const pagination = {};

  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit,
    };
  }

  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit,
    };
  }

  res.status(200).json({
    succces: true,
    count: companies.length,
    pagination,
    data: companies,
  });
});

// desc     Get single company
// @route   GET api/v1/companies/:id
// access   Public
exports.getCompany = asyncHandler(async (req, res, next) => {
  const company = await Company.findById(req.params.id);

  if (!company) {
    return next(
      new ErrorResponse(`${req.params.id}'li şirket bulunamadı.`, 404)
    );
  }

  res.status(200).json({ succces: true, data: company });
});

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
exports.updateCompany = asyncHandler(async (req, res, next) => {
  const company = await Company.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!company) {
    new ErrorResponse(`${req.params.id}'li şirket bulunamadı.`, 404);
  }

  res.status(200).json({ succces: true, data: company });
});

// desc     Delete company
// @route   DELETE api/v1/companies/:id
// access   Private
exports.deleteCompany = asyncHandler(async (req, res, next) => {
  const company = await Company.findByIdAndDelete(req.params.id);

  if (!company) {
    new ErrorResponse(`${req.params.id}'li şirket bulunamadı.`, 404);
  }

  res.status(200).json({ succces: true, data: {} });
});
