const express = require('express');
const app = express();
const port = 3000;

app.get('/', function (req, res) {
  res.send('Hello Express')
});

app.listen(port, function () {
    console.log(`listening ${port}`);
})

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('main', {ejs에 넘길 list : 'Hello');
})

var userRouter = require('./routes/user'); //라우터js 경로

app.use('/user', userRouter);//상위경로 지정, 라우터 사용
