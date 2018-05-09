var express = require('express');
var app = express();
var userRoutes = require("./api/routes/routes");
var bodyParser = require('body-parser');
var cors  = require('cors');

//allow cross origin requests.
app.use(cors());

//lets the server read the request body if its json.
app.use(bodyParser.json());

//handels the api routes of the server.
userRoutes(app);

var server = app.listen(8181, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log(`Example app listening at http://${host}:${port}`);

});