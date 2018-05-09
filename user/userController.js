const bodyParser= require('body-parser');
const express = require('express');
const router = express.Router();
const User =  require('./user');

//router.use(bodyParser.urlencoded({extended :true}));
//router.use(bodyParser.json());
// router.post('/', function(req, res){

//     User.create({
//             name : req.body.name,
//             emailid : req.body.emailid,
//             password : req.body.password
//     }, function (err, user) {
//         if (err) return res.status(500).send("There was a problem adding the information to the database.");
//         res.status(200).send(user);
//     });
//     });

