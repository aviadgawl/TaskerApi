var express = require('express');
var app = express();
var userRoutes = require("./api/routes/routes");
app.get('/api/getUserById', function (req, res) {

    res.end("Aviad shua");
});

app.get('/api/getUserByName' , function(req , res){

    res.end();
});

userRoutes(app);

var server = app.listen(8181, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log(`Example app listening at http://${host}:${port}`);

});