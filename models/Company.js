const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Lütfen isim giriniz.'],
      unique: true,
      trim: true,
      maxlength: [50, 'İsim 50 karakteri geçemez.'],
    },
    legalNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    website: {
      type: String,
      match: [
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
        'HTTP ya da HTTPS içeren geçerli bir bağlantı giriniz.',
      ],
    },
    country: {
      type: String,
      maxlength: [50, 'Ülke adı 50 karakteri geçemez.'],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Cascade delete courses when a bootcamp is deleted
CompanySchema.pre('remove', async function (next) {
  await this.model('Product').deleteMany({ company: this._id });
  next();
});

// Reverse populate with virtuals
CompanySchema.virtual('products', {
  ref: 'Product',
  localField: '_id',
  foreignField: 'company',
  justOne: false,
});

module.exports = mongoose.model('Company', CompanySchema);
