var Notice = require('./notice_model');

exports.load = function(req, res, next, noticeId) {
	Notice
	.findOne({ _id: noticeId })
	.exec(function (err, notice) {
		if (notice) {
			req.notice = notice;
			next();
		} else {
			next(new Error('No existe noticeId = '+ noticeId))
		}
	});
}

exports.all = function (req, res) {
	Notice
	.find()
	.exec(function (err, notices) {
		res.json(notices);
	})
}

exports.new = function (req, res, next) {
	var notice = new Notice(req.body.notice);
	notice.save();
	next();
}

exports.show = function (req, res) {
	res.json(req.notice);
}

exports.delete = function (req, res, next) {
	Notice
	.findOne({ _id: req.notice._id })
	.remove()
	.exec(function (err) {
		if (err) console.log(err);
		next();
	});
}