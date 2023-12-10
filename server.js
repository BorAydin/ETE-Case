const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Route files
const auth = require('./routes/auth');
const companies = require('./routes/companies');
const products = require('./routes/products');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

const app = express();

// Mount routers
app.use('/api/v1/auth', auth);
app.use('/api/v1/companies', companies);
app.use('/api/v1/products', products);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Sunucu ${process.env.NODE_ENV} ortamında ${PORT} portunda çalışıyor.`
  )
);
