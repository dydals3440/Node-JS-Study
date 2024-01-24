// const products = [];
const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = (cb) => {
  // 비동기식 코드.
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      // return [];
      return cb([]);
    }
    // return JSON.parse(fileContent);
    cb(JSON.parse(fileContent));
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    // 고유한 아이디 생성, (동적 세부 페이지를 위해)
    this.id = Math.random().toString();
    // products.push(this);
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    // 에러 발생, 그냥 products를 반환해야하는데 클래스의 로컬 속성이 아니라  1번줄의 배열을 반환하고 있어서 그렇다.
    // return this.products;
    getProductsFromFile(cb);
  }
};
