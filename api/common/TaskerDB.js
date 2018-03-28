"use strict";

var sql = require("mssql");

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