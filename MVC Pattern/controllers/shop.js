// 2. Models 추가
const Product = require('../models/product');

// 현재 모든 로직이, 제품과 관련되어 있기 떄문에, 제품 관련 논리만 다루는 컨트롤러를 만들어 관리.
// 나중에 사용자 논리를 추가하면, user.js를 만들어서 관리.

// const products = [];

exports.getProduct = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'Shop',
      path: '/products',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};

exports.getProduct = (req, res, next) => {
  // params뒤의 아이디는, 다이나믹 라우팅으로 설정한 이름
  const prodId = req.params.productId;
  console.log(prodId);
  res.redirect('/');
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart',
  });
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders',
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout',
  });
};
