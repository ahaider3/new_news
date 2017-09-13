var mongoose = require('mongoose');

var tweetsSchema = new mongoose.Schema({
  _id: String,
  title: String,
  description: String,
  url_image: String,
  tweets: [String],
  loc: [String],
  sentiments: [Number],
}, {collection: 'tweets'});

module.exports = mongoose.model('Tweets', tweetsSchema);
