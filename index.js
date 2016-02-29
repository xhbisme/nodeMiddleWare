//引入modules
var express = require('express');

//初始化app
var app = express();

//自写登陆验证function
//next()--继续执行？
//end()--程序到此为止，并可传参，会在浏览器显示
/*获得登陆数据*/
var getLoginData = function (req, res, next) {
  	console.log('getLoginData');
  	next({usrName : 'aa',passWd : 'bb'});
  	//res.end('aaaaa1');
};
/*登录权限认证*/
var loginEnsure = function(loginInfo, req, res, next){
	console.log('loginEnsure   '+loginInfo.usrName+'   '+loginInfo.passWd);
  	//res.end('sdf');
  	next();
};

//必须在get之前，顺序很重要
app.use(getLoginData);
app.use(loginEnsure);

app.get('/',function(req,res,next){//访问url‘/’的时候执行函数
	console.log(123);
	res.send('hello');
});

app.listen(3000);

