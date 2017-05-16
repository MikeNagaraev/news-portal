var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

require('./server/db/models/News');

var News = mongoose.model('News');

var news = require('./server/routes/news');

mongoose.connect('mongodb://mikhail:123456789@ds157987.mlab.com:57987/super-db');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/home/news', news);
app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});







app.set('port', 5000);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
})
