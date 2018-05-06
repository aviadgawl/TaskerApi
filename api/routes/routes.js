'use strict';

var usersCtrl = require('../controllers/users');
var tasksCtrl = require('../controllers/tasks'); 

module.exports = function (app) {
  
  app.route('/users/save')
    .post(usersCtrl.saveUser);

  app.route('/users/:userId')
    .get(usersCtrl.getUserInfo);

  app.route('/tasks/save')
    .post(tasksCtrl.saveTask);

  app.route('/tasks/:userId')
    .get(tasksCtrl.getTasks);
};