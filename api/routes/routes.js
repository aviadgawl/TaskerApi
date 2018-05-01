'use strict';

module.exports = function(app) {
  var usersCtrl = require('../controllers/users');

  app.route('/users')
    .get(usersCtrl.listAllUsers);


  app.route('/users/:userId')
    .get(usersCtrl.getUserInfo)
    .put(usersCtrl.updateUser)
    .delete(usersCtrl.deleteUser);
};