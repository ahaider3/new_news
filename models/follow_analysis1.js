var mongoose = require('mongoose');

var followSchema = new mongoose.Schema({
  _id: String,
  text: String,
  time: String,
  type: String,
  frequency: Number,
  irfft: Number,

}, {collection: 'tweet_frequency_smooth'});

module.exports = mongoose.model('FollowAnalysis1', followSchema);
