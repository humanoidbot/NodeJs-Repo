const mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
       name :String,
       emailid : String,
        password : String
});

module.exports = mongoose.model("User", UserSchema);