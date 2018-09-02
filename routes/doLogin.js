var express = require('express');
var router = express.Router();
var db = require('../modules/db');

router.post('/',function(req, res){
    db.find('user', 'info', req.body, function(result){
        if(result.length == 0){
            res.send("<script>alert('用户名或密码错误');location.href='/login'</script>");
        }else{
            req.app.locals['userinfo'] = result[0].userinfo;
            req.session.userinfo = result[0].userinfo;
            res.redirect('/goods');
        }
    })
});

module.exports = router;