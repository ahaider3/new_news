var mongoose = require('mongoose');

var tweetsSchema = new mongoose.Schema({
  _id: String,
  title: String,
  description: String,
  old_title: String,
  old_description: String,

  url_image: String,
  tweets: [String],
  common: [String],
  tagsource: [String],
  loc: [String],
  sentiments: [Number],
}, {collection: 'tweets'});

module.exports = mongoose.model('Tweets', tweetsSchema);
