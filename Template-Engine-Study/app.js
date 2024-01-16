const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

// module.exports = path.dirname(require.main.filename);

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
// 정적으로 서비스 원하기 하는 경로(바로 읽기 엑세스를 허용하고자 하는 경로) public 폴더에 있다고 가정! -> 여러 정적파일 등록 가능!
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

// catch all route
app.use((req, res, next) => {
  // res.sendFile(path.join(__dirname, 'views', '404.html'));
  res.status(404).render('404');
});

app.listen(8080);
