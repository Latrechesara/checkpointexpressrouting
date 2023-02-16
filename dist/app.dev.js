"use strict";

var _require = require('dotenv'),
    config = _require.config;

var express = require('express');

var _require2 = require('path'),
    join = _require2.join;

var router = express.Router();
var app = express();
app.use(express["static"](join(__dirname, 'public'))); // Load environment variables

config();
router.use(function (req, res, next) {
  var date = new Date();

  if (date.getDay() > 0 && date.getDay() < 4 && date.Hours() > 9 && date.getHours() < 17) {
    next();
  } else {
    res.redirect('/offlinepage');
    ;
  }
}); // Add routes

app.get('/', function (req, res) {
  res.send('Hello World');
});
app.get('/index', function (req, res) {
  res.sendFile(join(__dirname, 'public', 'index.html'));
});
app.get('/about', function (req, res) {
  res.sendFile(join(__dirname, 'public', 'about.html'));
});
app.get('/store', function (req, res) {
  res.sendFile(join(__dirname, 'public', 'store.html'));
});
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log("Server started on port ".concat(PORT));
});
//# sourceMappingURL=app.dev.js.map
