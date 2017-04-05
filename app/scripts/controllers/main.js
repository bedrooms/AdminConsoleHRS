'use strict';

/**
 * @ngdoc function
 * @name adminConsoleHrsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the adminConsoleHrsApp
 */

angular.module('adminConsoleHrsApp')
  .controller('MainCtrl', function ($rootScope, $location, authenticationSvc) {

    var vm = this;

    var svc = authenticationSvc;

    var userInfo = svc.getUserInfo();

    if(userInfo == null)
    {
        $location.path('login');      
    }
    else
    {
        $rootScope.login = true;
    }

    /**/

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];



    
  });
