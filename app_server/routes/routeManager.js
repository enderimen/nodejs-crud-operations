var routeLogin  = require('./loginRoute');
var routeHome   = require('./homeRoute');

module.exports = (app) => {

    app.use('/login', routeLogin);
    app.use('/home', routeHome);

};