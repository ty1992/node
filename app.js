var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session')
var app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    rolling: true,
    cookie: { maxAge: 10000 }
}))

//引用路由模块
var loginRouter = require('./routes/login');                    //登录
var doLoginRouter = require('./routes/doLogin');                //执行登录
var registerRouter = require('./routes/register');              //注册
var doRegisterRouter = require('./routes/doRegister');          //执行注册
var loginoutRouter = require('./routes/loginout');              //退出
var goodsRouter = require('./routes/goods');                   //商品列表

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    if(!req.session.userinfo && req.url!='/login' || req.url!= '/dologin'){
        res.redirect('/login');
    }else{
        next();
    }
})
app.use('/goods',goodsRouter);
app.use('/loginout',loginoutRouter);
app.use('/login',loginRouter);
app.use('/dologin',doLoginRouter);
app.use('/register',registerRouter);
app.use('/doregister',doRegisterRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
