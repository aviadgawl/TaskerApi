"use strict";

//var taskerDB = require("../common/TaskerDB");
var taskerDB = require("../../mock/TaskerDBMock");

exports.getUserInfo = function (req, res) {

    taskerDB.getUserInfo(parseInt(req.query.facebookId), function (err, data) {
        if (err) throw err;
        else res.end(JSON.stringify(data));
    });
};