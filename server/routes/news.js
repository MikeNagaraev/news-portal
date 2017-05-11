var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var News = mongoose.model('News');

router.param('news_id', function(req, res, next, id) {

})

router.get('/news', function(req, res, next) {

})

router.get('/news/:news_id', function(req, res, next) {

})

module.exports = router;
