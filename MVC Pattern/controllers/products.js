// 2. Models 추가
const Product = require('../models/product');

// 현재 모든 로직이, 제품과 관련되어 있기 떄문에, 제품 관련 논리만 다루는 컨트롤러를 만들어 관리.
// 나중에 사용자 논리를 추가하면, user.js를 만들어서 관리.

// const products = [];

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title); // name title input
  product.save();
  //   products.push({ title: req.body.title });
  res.redirect('/');
};

exports.getProduct = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};
