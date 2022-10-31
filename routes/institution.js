var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('institution', { title: 'Institution Search Results' });
});

module.exports = router;