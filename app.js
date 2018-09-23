var http = require('http');
var file = require('fs');
var path = require('path');
var express = require('express');
var app = express();
var ejs = require('express-ejs-layouts');
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/app_server/views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(ejs);
app.use('/public', express.static(path.join(__dirname, 'public'))); // kullanıcıya erişim izni verdiğimiz dosyalar. (css vs.)


// routes
require('./app_server/routes/routeManager')(app);

app.listen(8000);