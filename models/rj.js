var mongoose = require('mongoose');

var rjSchema = new mongoose.Schema({
  _id: String,
  headline: String,
  time: String,
  iter: Number,
}, {collection: 'robot_headlines'});

module.exports = mongoose.model('RJ',rjSchema);
