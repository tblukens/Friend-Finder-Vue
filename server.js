// server.js
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

app = express();
var port = process.env.PORT || 5000;
app.use(serveStatic(__dirname + "/dist"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes.js")(app);

app.listen(port);
console.log('server started '+ port);