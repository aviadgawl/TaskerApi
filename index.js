var express = require('express');
var app = express();
var userRoutes = require("./api/routes/routes");
var bodyParser = require('body-parser');

//app.use(bodyParser);
app.use(bodyParser.json());
userRoutes(app);

var server = app.listen(8181, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log(`Example app listening at http://${host}:${port}`);

});