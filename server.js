var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();


var PORT = process.env.PORT || 8080;

var jsonParser = bodyParser.urlencoded({ extended: false })

app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
app.use(bodyParser.text({ type: 'text/html' }))

var apiroutes = require("./app/routing/apiRoutes.js");
var htmlroutes = require("./app/routing/htmlRoutes.js");

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT)
});

