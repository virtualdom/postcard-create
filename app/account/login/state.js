'use strict';

var HTML = require('./index.html');

module.exports = function ($stateProvider) {

  $stateProvider.state('login', {
    url: '/login',
    template: HTML,
    controller: 'LoginCtrl',
    data: {
      authenticated: false
    }
  });

};
