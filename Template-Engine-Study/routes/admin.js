const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();
// const여도, 배열 자체는 같은 객체기 때문에 새로운 요소를 받을 수 있다. 요소를 추가하거나, 제거해도 전체적인 객체에는 영향이 없다.
const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  res.render('add-product', {
    pageTitle: 'Add Product',
    // path를 view로 넘기고, 어느 것에 대한 경로가 로딩된 것인지 알 수 있게 된다.
    path: '/admin/add-product',
  });
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

// module.exports = router;
exports.routes = router;
exports.products = products;
