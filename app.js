const express = require('express')
const app = express();
var db = require('./db');
var session = require('express-session')
//var userController = require('./user/userController');
//app.use('/users',userController);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false
}));
app.use(express.static(__dirname + '/views'));

module.exports = app;
