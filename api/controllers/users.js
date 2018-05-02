"use strict";

// var sql = require("mssql");

// var config = {
//     user: "aviadgawl",
//     password: "1q2w3e4rSSJ2",
//     server: "aviaddev.database.windows.net",
//     database: "TaskerDB",
//     options: { encrypt: true }
// };

// exports.getUser = function (req, res) {
//     res.end("getUser");

//     sql.connect(config, function (err) {

//         if (err) console.log(err);

//         var request = new sql.Request();

//         request.query('select Id , Name from dbo.Users', function (err, dataFromDb) {

//             if (err) {
//                 console.log(err)
//             }
//             else {
//                 console.log(dataFromDb.recordset)
//             }

//             sql.close();
//         });
//     });
// };

var taskerDB = require("../common/TaskerDB");

exports.getUser = function (req, res) {

    res.end("getUser");

    taskerDB.getDBData('select Id , Name from dbo.Users', function (error, dbData) {
        if (error) {
            console.log(error)
        }
        else {
            console.log(dbData.recordset)
        }
    });
};

exports.listAllUsers = function (req, res) {

    res.end("listAllUsers");
};

exports.updateUser = function (req, res) {

    res.end("updateUser");
};

exports.deleteUser = function (req, res) {
    res.end("deleteUser");
};