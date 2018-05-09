const mongoose = require('mongoose');
const dburl = 'mongodb://localhost:27017/authapp'
// dburl : 'mongodb://admin:admin123@ds263989.mlab.com:63989/devdb'
mongoose.connect(dburl).then(() => console.log("successfully added")).
  catch((err) => console.log("error occurred while connecting to db" + err));

module.exports = dburl; 