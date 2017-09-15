// controladores
var noticeController = require('./notice_controller');

module.exports = function (express) {
	// motor de rutas
	var api = express.Router();

	// autoload
	api.param('noticeId', noticeController.load);

	// noticias
	api.get('/notices', noticeController.all);
	api.get('/notices/:noticeId', noticeController.show);
	api.post('/notices', noticeController.new, noticeController.all);
	api.post('/notices/:noticeId/delete', noticeController.delete, noticeController.all);

	return api;
};