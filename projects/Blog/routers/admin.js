/**
*   @file 管理员路径
*   @author huhongtao
*/

var express  = require('express');

var router = express.Router();

router.get('/user', function(req, res, next) {
    res.render('register/index');
});

module.exports = router;