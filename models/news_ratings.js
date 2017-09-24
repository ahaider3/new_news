var mongoose = require('mongoose');

var newsRatingsSchema = new mongoose.Schema({
  _id: String,
  source: String,
  score: Number,
}, {collection: 'news_ratings'});

module.exports = mongoose.model('NewsRatings', newsRatingsSchema);
