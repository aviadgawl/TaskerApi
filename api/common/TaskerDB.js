"use strict";

var sql = require("mssql");

var config = {
    user: "aviadgawl",
    password: "1q2w3e4rSSJ2",
    server: "aviaddev.database.windows.net",
    database: "TaskerDB",
    options: { encrypt: true }
};

exports.getDBData  =function(query , callback){

    sql.connect(config, function (err) {

        if (err) console.log(err);

        var request = new sql.Request();

        request.query(query, function (err, dataFromDb) {

            callback(err , dataFromDb );

            sql.close();
        });
    });
};