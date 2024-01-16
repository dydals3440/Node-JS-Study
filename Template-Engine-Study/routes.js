const fs = require('fs');
const routes = require('./routes.js');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    // get요청은 해당 X
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write('</html');
    // 항상 끝났다고 말해줘야함.
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    // 모든 데이터를 얻을때 까지 아래 함수 실행
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on('end', () => {
      // 이 청크들과 상호작용하기 위해서는 buffer를 사용!
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split('=')[1];

      // Sync는 동기적이기때문에 파일이 커지면, 아래 내용들이 실행 안되는경우가 발생하여 문제점이 생김!
      // fs.writeFileSync('message.txt', message);
      // 콜백은 완성된 뒤에 실행되어야 하는 함수.
      fs.writeFile('message.txt', message, (err) => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello my Node.js server</h1></body>');
  res.write('</html>');
  // 항상 끝났다고 말해줘야함.
  res.end();
};

// module.exports = requestHandler;
module.exports = {
  handler: requestHandler,
  someText: 'Some hard coded text',
};
// 위와 동일
// module.exports.handler = requestHandler;
// module.exports.someText = 'Some hard coded text';

// app.js에서 routes.handler로 접근가능!
