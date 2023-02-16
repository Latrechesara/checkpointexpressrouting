"use strict";

var _require = require('dotenv'),
    config = _require.config;

var express = require('express');

var app = express(); // Load environment variables

config(); // Add routes

app.get('/', function (req, res) {
  res.send('Hello World');
});
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log("Server started on port ".concat(PORT));
});
//# sourceMappingURL=server.dev.js.map
