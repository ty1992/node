var express = require('express');
var router = express.Router();

router.get('/',function(req, res){
    req.session.cookie.maxAge = 0;
    req.app.locals['userinfo'] = '';
    res.redirect('/login');
})
module.exports = router;