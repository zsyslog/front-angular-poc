'use strict';

/**
 * @ngdoc overview
 * @name b2bautosFrontpocApp
 * @description
 * # b2bautosFrontpocApp
 *
 * Main module of the application.
 */
angular
  .module('b2bautosFrontpocApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
