// const products = [];
const fs = require('fs');
const path = require('path');

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    // products.push(this);
    const p = path.join(
      path.dirname(process.mainModule.filename),
      'data',
      'products.json'
    );
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    // 에러 발생, 그냥 products를 반환해야하는데 클래스의 로컬 속성이 아니라  1번줄의 배열을 반환하고 있어서 그렇다.
    // return this.products;
    const p = path.join(
      path.dirname(process.mainModule.filename),
      'data',
      'products.json'
    );
    // 비동기식 코드.
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        // return [];
        cb([]);
      }
      // return JSON.parse(fileContent);
      cb(JSON.parse(fileContent));
    });
  }
};
