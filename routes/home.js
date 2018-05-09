var express = require('express');
var router = express.Router();

var user_instance_controller = require('../controller/userController');

/// BOOK ROUTES ///

// GET catalog home page.
router.get('/', user_instance_controller.profile);
router.get('/register',user_instance_controller.show_register)
router.post('/register',user_instance_controller.register)
router.post('/update', user_instance_controller.update_profile);
module.exports =router;