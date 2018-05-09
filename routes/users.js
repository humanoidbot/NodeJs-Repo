var express = require('express');
const authController = require('../controller/authController');
var router = express.Router();

router.get('/login', authController.user_login_get);

router.post('/login', authController.user_login_post);

router.get('/logout', function(req, res, next) {
  /*if(req.session){
       console.log('cominge here >>>>',req.session);
       req.session.destroy(function(err) {
         if(err){
           throw new Error;
         }
         next();
      })
       console.log('cominge here >>>>',req.session);
  }*/
  res.redirect('/users/login');
});


module.exports = router;
