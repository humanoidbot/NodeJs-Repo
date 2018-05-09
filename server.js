const app = require('./app')
const session = require('express-session')
const port = process.env.port || 3000;
const indexRouter = require('./routes/indexRouter')
const userRouter = require('./routes/users')
const homepage = require('./routes/home')
function requiresLogin(req, res, next) {
    if (req.session && req.session.userId) {
        return next();
    } else {
        var err = new Error('You must be logged in to view this page.');
        err.status = 401;
        return next(err);
    }
}
app.use('/home', requiresLogin, function (req, res, next) {
    next();
  })
app.set('view engine', 'pug')
app.use('/',indexRouter);
app.use('/user',userRouter);
app.use('/home', homepage);

app.use('/register', function(req, res){
    console.log(req.body);
    res.render('regis.pug', { title: 'Register'});
});

app.listen(port, function () {
    console.log("Listening @3000");
});

