var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('pages/index',{ page:'One', menuId:'home'} );
});

router.get('/two', function(req, res) {
    res.render('pages/template-two', { page:'Two', menuId:'about' });
});

module.exports = router;
