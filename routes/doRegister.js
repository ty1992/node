var express = require('express');
var router = express.Router();
var db = require('../modules/db');

router.post('/',function(req, res){
    db.find('user', 'info', req.body, function(result){
        if( result.length == 0 ){
            db.insertOne('user','info',req.body,function(result_1){
                res.send("<script>alert('注册成功');location.href='/login';</script>");
            })
        }else{
            res.send("<script>alert('注册失败,用户名已存在');location.href='/register';</script>");
        }
    });
});

module.exports = router;


