var mongoose = require('mongoose');

var NewsSchema = mongoose.Schema({
  id: Number,
  description: String,
  title: String,
  content: String,
  image: String
})

module.exports = mongoose.model('News', NewsSchema);
