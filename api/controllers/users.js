"use strict";

//var taskerDB = require("../common/TaskerDB");
var taskerDB = require("../../mock/TaskerDBMock");

exports.getUserInfo = function (req, res) {

    taskerDB.getUserInfo(parseInt(req.params.facebookId), function (err, data) {
        if (err) res.end(err);
        else res.end(JSON.stringify(data));
    });

};

exports.saveUser = function (req, res) {
    taskerDB.saveUser(req.body.id, req.body.userName, function (err, data) {
        if (err) res.end(err);
        else res.end(JSON.stringify(data));
    });
};