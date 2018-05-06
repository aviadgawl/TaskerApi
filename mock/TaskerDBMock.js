var fs = require("fs");
var dbFilePath = "./mock/DB.json";

exports.dbDelete = function (cb) {
    fs.unlink(dbFilePath, cb);
}

exports.dbCreate = function (data, cb) {
    fs.writeFile(dbFilePath, JSON.stringify(data), cb);
}

exports.getUserInfo = function (facebookId, cb) {
    fs.readFile(dbFilePath, function (err, data) {
        if (err) cb(err);
       
        var users = JSON.parse(data).users;
     
        var user = users.filter(function (user) {
            if (user.facebookId == facebookId) { return user; }
        })[0];
     
        user = user == undefined?null:user;

        cb(null, user);
    });
}

exports.saveUser = function (facebookId, name, cb) {

    fs.readFile(dbFilePath, function (err, data) {
        if (err) cb(err);

        var dbData = JSON.parse(data);
        dbData.users.push({ facebookId: facebookId, name: name })

        fs.writeFile(dbFilePath, JSON.stringify(dbData), function (err) {
            if (err) throw err;

            cb(null, { message: `user ${name} has been saved!`, status: true });
        });

    });
}

exports.getUserTasks = function (facebookId, cb) {
    fs.readFile(dbFilePath, function (err, data) {
        if (err) cb(err);
       
        var tasks = JSON.parse(data).tasks;
     
        var resultTasks = tasks.filter(function (task) {
            if (task.userFacebookId == facebookId) { return task; }
        });
     
        cb(null, resultTasks);
    });
}

exports.saveTask = function(userFacebookId , header , patron , cb){
    fs.readFile(dbFilePath, function (err, data) {
        if (err) cb(err);

        var dbData = JSON.parse(data);
        dbData.tasks.push({ userFacebookId: userFacebookId, header: header , patron:patron });

        fs.writeFile(dbFilePath, JSON.stringify(dbData), function (err) {
            if (err) throw err;

            cb(null, { message: `task ${header} has been saved!`, status: true });
        });

    });
}