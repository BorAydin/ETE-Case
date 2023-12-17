const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Lütfen ürün adını ekleyin.'],
  },
  category: {
    type: String,
    required: [true, 'Lütfen ürün türünü ekleyin.'],
  },
  productAmount: {
    type: Number,
    required: true,
  },
  amountUnit: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  company: {
    type: mongoose.Schema.ObjectId,
    ref: 'Company',
    required: false,
  },
});

module.exports = mongoose.model('Product', ProductSchema);
