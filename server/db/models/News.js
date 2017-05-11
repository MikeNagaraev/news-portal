var mongoose = require('mongoose');

var NewsSchema = mongoose.Schema({
  title: String,
  content: String,
  image: String
})

module.exports = mongoose.model('News', NewsSchema);
