var fs = require("fs");
const dbFilePath = "./mock/DB.json";

exports.dbDelete = function (cb) {
    fs.unlink(dbFilePath, cb);
}

exports.dbCreate = function (data, cb) {
    fs.writeFile(dbFilePath, JSON.stringify(data), cb);
}

exports.getUserInfo = function (facebookId, cb) {
    fs.readFile(dbFilePath, function (err, data) {
        if (err) cb(err);
       
        var users = JSON.parse(data);
     
        var user = users.filter(function (user) {
            if (user.facebookId == facebookId) { return user; }
        })[0];
     
        cb(null, user);
    });
}

exports.saveUser = function (facebookId, name, cb) {

    fs.readFile(dbFilePath, function (err, data) {
        if (err) cb(err);

        var users = JSON.parse(data);
        users.push({ facebookId: facebookId, name: name })

        fs.writeFile(dbfilePath, JSON.stringify(users), function (err) {
            if (err) throw err;

            cb(null, { message: `user ${name} has been saved!`, status: true });
        });

    });
}

exports.getUserTasks = function () {

}