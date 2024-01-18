const products = [];

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    products.push(this);
  }

  static fetchAll() {
    // 에러 발생, 그냥 products를 반환해야하는데 클래스의 로컬 속성이 아니라  1번줄의 배열을 반환하고 있어서 그렇다.
    // return this.products;

    return products;
  }
};
