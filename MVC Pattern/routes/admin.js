const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product', adminController.postEditProduct);

//  Post 요청이기에, URL 경로의 정보를 암호화하지 않는 대신, 요청 본문의 일부로 넣으면 된다.
router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;
