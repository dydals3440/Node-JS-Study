const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  // console.log(adminData.products);
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  const products = adminData.products;
  // prods 키로 접근 가능.
  res.render('shop', { prods: products, pageTitle: 'Shop', path: '/' });
});

module.exports = router;
