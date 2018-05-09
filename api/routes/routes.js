'use strict';

var usersCtrl = require('../controllers/users');
var tasksCtrl = require('../controllers/tasks'); 

module.exports = function (app) {
  
  app.route('/users/save')
    .post(usersCtrl.saveUser);

  app.route('/users/:facebookId')
    .get(usersCtrl.getUserInfo);

  app.route('/tasks/save')
    .post(tasksCtrl.saveTask);

  app.route('/tasks/:facebookId')
    .get(tasksCtrl.getTasks);
};