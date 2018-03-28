'use strict';

module.exports = function(app) {
  var usersCtrl = require('../controllers/users');

  app.route('/users')
    .get(usersCtrl.listAllUsers);


  app.route('/users/:userId')
    .get(usersCtrl.getUser)
    .put(usersCtrl.updateUser)
    .delete(usersCtrl.deleteUser);
};