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
    'ui.router'
  ])
 .config(function($stateProvider, $urlRouterProvider,$locationProvider) {

    $stateProvider  
        .state('main', {
            url: '/main',  
            templateUrl: 'views/indexMain.html',
             controller: 'MainCtrl as vm'
            
        })
        .state('forms', {
            url: '/forms', 
             templateUrl: 'views/forms.html',
                controller: 'MainCtrl as vm'             
        })
        .state('login', {
            url: '/login', 
            templateUrl: 'login.html',
            controller: 'sessionLogInCtrl as vm'             
        })
         .state('jobsAdmin', {
            url: '/jobsAdmin', 
            templateUrl: 'views/jobsAdmin.html',
            controller: 'MainCtrl as vm'               
        })

         $urlRouterProvider.otherwise('/main');

  });


