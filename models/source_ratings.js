var mongoose = require('mongoose');

var sourceRatingsSchema = new mongoose.Schema({
  _id: String,
  title: String,
  description: String,
  url_image: String,
  score: Number,
}, {collection: 'source_ratings'});

module.exports = mongoose.model('SourceRatings', sourceRatingsSchema);
