'use strict';

/**
 * @ngdoc overview
 * @name adminConsoleHrsApp
 * @description
 * # adminConsoleHrsApp
 *
 * Main module of the application.
 */
angular
  .module('adminConsoleHrsApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',    
    'ui.router',
    'ngTouch'
  ])
 .config(function($stateProvider, $urlRouterProvider,$locationProvider) {
    
    $urlRouterProvider.otherwise('/');

    $stateProvider  
        .state('/', {
            url: '/',         
            templateUrl: 'views/indexMain.html',
            controller: 'MainCtrl as vm'           
        })
        .state('forms', {
            url: '/forms',         
            templateUrl: 'views/forms.html',
            controller: 'MainCtrl as vm'           
        })

  });
