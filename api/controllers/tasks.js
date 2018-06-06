"use strict";

//var taskerDB = require("../common/TaskerDB");
var taskerDB = require("../../mock/TaskerDBMock");
var { Task } = require('../common/entits');

exports.getTasks = function (req, res) {
    taskerDB.getUserTasks(req.params.facebookId, function (err, data) {

        if (err) res.end(err);
        else res.end(JSON.stringify(data));

    });
};

exports.saveTask = function (req, res) {
    taskerDB.saveTask(req.body.userFacebookId, req.body.body, req.body.patron, function (err, data) {

        if (err) res.end(err);
        else res.end(JSON.stringify(data));

    });
};

