var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var News = mongoose.model('News');

router.param('news_id', function(req, res, next, id) {
  var query = News.findById(id);
  query.exec(function(err, news) {
    if (err) {
      return next(err);
    }
    if (!news) {
      return next(new Error('can\'t find news'));
    }
    req.news = news;
    console.log("news", news)
    return next();
  })
})

router.get('/', function(req, res, next) {
  console.log('get /news')
  News.find(function(err, news) {
    console.log(news)
    if (err) {
      return next(err);
    }
    res.json(news);
  })
})

router.get('/:news_id', function(req, res, next) {
  res.json(req.news);
})

router.post('/', function(req, res, next) {
  console.log(req.body);
  var news = new News(req.body);
  news.save(function(err, news) {
    if (err) {
      return next(err);
    }
    console.log(news);
    return res.json(news);
  })
})

router.delete('/:news_id', function(req, res, next) {
  News.remove(req.news, function(err, news) {
    if (err) {
      res.send(err);
    }
    res.send(news);
  })
})

module.exports = router;
