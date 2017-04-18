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

    $rootScope.userInfo = svc.getUserInfo();

    if($rootScope.userInfo == null)
    {
        $rootScope.login = false;
        $location.path('login');      
    }
    else
    {
      if($rootScope.userInfo.loginSuccess){
        $rootScope.login = true;
      }else{
        $rootScope.login = false;
        $location.path('login');      
      }
    }

    /**/

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];



    
  });
