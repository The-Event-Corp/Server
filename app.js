require('dotenv').config()
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var usersRouter = require("./routes/users");
var indexRouter = require('./routes/index');
var eventRouter = require('./routes/event');
var meetupRouter = require('./routes/meetup')

var app = express();

app.use(cors())
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));


var mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true})

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error'))
db.once('open', () => {
  console.log("Connected dabatase success")
})

// app.use('/api', indexRouter);
app.use('/api', usersRouter);
app.use('/api/event', eventRouter);
app.use('/api/meetup', meetupRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send("error");
});

// app.listen(3000, () => console.log("app listening on port 3000!"));

module.exports = app;


// https://www.eventbriteapi.com/v3/subcategories/2004?&token=MR4ZLEKYYABW5PBG7W7U