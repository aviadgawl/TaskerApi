"use strict";

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