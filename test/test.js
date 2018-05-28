const assert = require("assert");
const TaskerDBMock = require("../mock/TaskerDBMock")

describe('TaskerDBMock', function (done) {

    it("should create the database with defualt values", function (done) {
        TaskerDBMock.dbCreate({
            users: [{ facebookId: 123456, name: "aviad shua", points: 123 }],
            tasks: [{
                userFacebookId: "10215547018569143",
                header: "Eating",
                patron: null,
                status: "completed",
                body: "need to eat banana",
                dateCreated: "20/08/18"
            }]
        }, function (err, data) {
            if (err) assert.fail(err);

            done();
        });
    });

    it("should return the user aviad", function (done) {

        TaskerDBMock.getUserInfo(123456, function (err, user) {

            if (err) assert.fail(err);
            else assert.equal(user.name, "aviad shua");

            done();
        });
    });

    it("should return null getting a user from the db", function (done) {
        TaskerDBMock.getUserInfo(458795, function (err, data) {

            if (err) assert.fail(err);
            else assert.equal(data, null);

            done();
        });
    });

    it("should fail return the a user", function (done) {

        TaskerDBMock.getUserInfo(12345236, function (err, user) {

            if (err) assert.fail(err);
            else assert.deepEqual(user, undefined);


            done();
        });
    });

    it("should save a user", function (done) {
        TaskerDBMock.saveUser(654321, "liat shua", function (err, data) {

            if (err) assert.fail(err);
            else assert.equal(data.status, true);

            done();
        });

    });

    it("should add a task to the user aviad shua", function (done) {

        TaskerDBMock.saveTask(123456, "Eating", null, function (err, data) {

            if (err) assert.fail(err);
            else assert.equal(data.status, true);

            done();
        });

    });

    it("should return tasks for the user aviad shua", function (done) {
        TaskerDBMock.getUserTasks(123456, function (err, data) {

            if (err) assert.fail(err);
            else assert.equal(data[0].header, "Eating");

            done();
        });
    });

    it("should return the database to its defualt values", function (done) {
        TaskerDBMock.dbCreate({
            users: [{ facebookId: 123456, name: "aviad shua", points: 123 }],
            tasks: [{
                userFacebookId: "10215547018569143",
                header: "Eating",
                patron: null,
                status: "completed",
                body: "need to eat banana",
                dateCreated: "20/08/18"
            }]
        }, function (err, data) {
            if (err) assert.fail(err);

            done();
        });
    });

});


