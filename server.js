// dependencias
require('dotenv').config();
var cors = require('cors');
var config = require('./config');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// nueva applicación
var app = express();
var api = require('./api')(express);

// conección con la base de datos
mongoose.connect(config.database);

// configuración del servidor
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

// directorio píblico
app.use(express.static(__dirname + '/public'));

// rutas
app.use('/', api);

// lanzar servidor
app.listen(config.port, "0.0.0.0", function () {
	console.log('Servidor funcionando!');
});