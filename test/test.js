const assert = require("assert");
const TaskerDBMock = require("../mock/TaskerDBMock")

describe('TaskerDBMock', function (done) {

    it("this should create the database with defualt values", function (done) {
        TaskerDBMock.dbCreate([{ facebookId: 123456, name: "aviad shua" }] , function(err,data){
            if(err) assert.fail(err);

            done();
        });
    });

    it("this should return the user aviad", function (done) {
        
        TaskerDBMock.getUserInfo(123456, function (err, user) {

            if(err) assert.fail(err);
            else assert.equal(user.name , "aviad shua");

            done();
        });
    });

    it("this should fail return the a user", function (done) {
        
        TaskerDBMock.getUserInfo(12345236, function (err, user) {

            if(err) assert.fail(err);
            else assert.equal(user , undefined);

            done();
        });
    });

    it("this should save a user", function (done) {
        TaskerDBMock.saveUser(654321, "liat shua", function (data) {
            assert.equal(data.status , true);
            done();
        });

    })

    // it("this should delete the data base", function () {
    //     TaskerDBMock.dbDelete();
    // });
});