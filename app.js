var http = require('http');
var file = require('fs');
var path = require('path');
var express = require('express');
var app = express();
var ejs = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/app_server/views'));

app.use(ejs);
app.use('/public', express.static(path.join(__dirname, 'public'))); // kullanıcıya erişim izni verdiğimiz dosyalar. (css vs.)

app.listen(8000);