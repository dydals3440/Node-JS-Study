const http = require('http');

const express = require('express');

const app = express();

// // use를 사용하면, 새로운 미들웨어 추가 가능
// app.use((req, res, next) => {
//   // next는 사실 함수로, Express.js를 통해 전달되는 함수. (다음 미들웨어로 이동할 수 있게 함.)
//   console.log('In the Middleware!');
//   next(); // Allow to request to continue to the next middleware in line
// });

// 만약 모든 요청에 적용해야할 미들웨어가 있다면 아래와 같이 작성, 다른 미들웨어 위에
app.use('/', (req, res, next) => {
  console.log('This always runs!');
  next();
});

// add-product가 위에있는이유, next를 호출하지 않으면, 다음 미들웨어로 넘어가지 않기 떄문이다. 따라서 결국에 /add-product가 있다면, 위에서 아래로 가는 순서로 이 미들웨어에 먼저 도달하고, add-product는 이 미들웨어와 일치하게 됩니다. 그리고 next를 호출하지 않았으므로, 필터 요청과 일ㅇ치함에도 불구하고 / 경로를 처리할 기회를 얻지 못하게 됩니다.

app.use('/add-product', (req, res, next) => {
  console.log('In another Middleware!');
  res.send('<h1>Hello from Add-product!</h1>');
});

app.use('/', (req, res, next) => {
  console.log('In another Middleware!');
  res.send('<h1>Hello from Express!</h1>');
});

// const routes = require('./routes');

// const server = http.createServer(app);

// function rqListiner(req, res) {}

// http.createServer(rqListiner);

// 서버에 요청이 들어올 때 마다 노드가 익명함수 실행, 이벤트 드리븐 아키텍처
// http.createServer(function (req, res) {});
// const server = http.createServer(routes.handler);

app.listen(8080);

// 무엇인가 실행하고 싶으면, 상수로 관리하자.

// 생성됨 서버 -> 저장 , 해당하는 서버 실행
