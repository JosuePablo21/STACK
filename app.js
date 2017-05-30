var express = require('express'),
    routes = require('./routes'),
    path = require('path');

var app = express();
app.directory = __dirname;
app.use(express.static(__dirname + '/app'));
app.use(express.static(__dirname + '/bower_components')); 

require('./config/environments')(app);
require('./routes')(app);

module.exports = app;
