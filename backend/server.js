import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import conncectDB from './config/db.js';
import products from './data/products.js';

const port = process.env.PORT || 3002;

conncectDB(); // Connect to MongoDB

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
