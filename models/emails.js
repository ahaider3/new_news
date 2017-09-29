var mongoose = require('mongoose');

var emailSchema = new mongoose.Schema({
  email: String,
}, {collection: 'emails'});

module.exports = mongoose.model('Emails', emailSchema);
