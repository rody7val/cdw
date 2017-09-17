var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NoticeSchema = new Schema({
	title: String,
    email: String,
	content: String,
	date: {type: Number, default: Date.now}
});

module.exports = mongoose.model('Notice', NoticeSchema);