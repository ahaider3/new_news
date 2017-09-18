var mongoose = require('mongoose');

var followSchema = new mongoose.Schema({
  _id: String,
  source: String,
  text: String,
  sentiment: Number,
  time: String,
}, {collection: 'follow_ft'});

module.exports = mongoose.model('FollowAnalysis', followSchema);
