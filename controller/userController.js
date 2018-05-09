const express = require('express')
const router = express.Router();
const User = require('./../user/user')
const bcrypt = require('bcryptjs')
const async = require('async');

exports.profile = function (req, res) {
    
       let currentUser = User.findOne({ _id: req.session.userId });
          
       let allUsers =   User.find().select("-_id");

        console.log(allUsers);
        console.log(currentUser);
        res.render('./../profile.pug', {currentUser: currentUser,allUsers: allUsers });    
        //res.render('./../profile.pug', { userName: `${user.name}` });
}
exports.update_profile = function (req, res) {
    console.log("inside update profile")
    User.findOne({ _id: req.session.userId }, function (err, user) {
        if(err) res.end('err occurred while updating')
        let hashedpassword = bcrypt.hashSync(req.body.password, 8);
        const doc = {password :hashedpassword}
        User.findByIdAndUpdate({_id: req.session.userId},doc, function(err, user){
            if(err)
            res.end('error occurred while updating 1')
            else
            res.redirect('./../profile.pug', { userName: `${user.name}` });
        })
    });
};

exports.register = function (req, res) {
    let hashedpassword = bcrypt.hashSync(req.body.password, 8);

    User.create({
        name: req.body.name,
        emailid: req.body.emailid,
        password: hashedpassword
    }, function (err, user) {
        if (err) return res.status(500).send("There was a problem adding the information to the database.");
        else{console.log("new user registered");
            res.redirect('/user/login');
        }
    });

    // var token = jwt.sign({id : User._id}, config.secretkey,  {
    //     expiresIn: 86400 // expires in 24 hours
    //   });

    //   res.status(200).send({auth :true, token : token});

};


exports.show_register = function (req, res, next) {
    console.log(req.body);
    res.render('regis.pug', { title: 'Register' });
}
