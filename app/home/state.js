'use strict';

var HTML = require('./index.html');

module.exports = function ($stateProvider) {

  $stateProvider.state('home', {
    url: '/',
    template: HTML,
    data: {
      authenticated: true
    }
  });

};
