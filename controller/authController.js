const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('./../config')
const User = require('./../user/user')
const mydb = require('./../db')
var MongoClient = require('mongodb').MongoClient;

exports.user_login_get = function (req, res, next) {
    console.log(req.body);
    res.render('login_form.pug', { title: 'Login' });
}


exports.user_login_post = [
    (req, res, next) => {

        var isValidUser;
        console.log("inside login method");

        User.findOne({ 'emailid': req.body.emailid }).exec(function (err, user) {
        if(err)  return res.redirect('/user/login');
            console.log(user);
            isValidUser = bcrypt.compareSync(req.body.password, user.password);
            console.log(isValidUser);
            if (isValidUser) {
                req.session.userId = user._id;
                let token = jwt.sign({ id: User._id }, config.secretkey, {
                    expiresIn: 86400 // expires in 24 hours
                });

                console.log(token);

                console.log("re directing to profile");
                res.redirect('/home');
            }
            else
                return res.redirect('/user/login');
        });
    }
]

