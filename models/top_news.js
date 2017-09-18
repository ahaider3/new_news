var mongoose = require('mongoose');

var topNewsSchema = new mongoose.Schema({
  _id: String,
  title: String,
  description: String,
  old_title: String,
  old_description: String,
  url_image: String,
}, {collection: 'topnews'});

module.exports = mongoose.model('TopNews', topNewsSchema);
