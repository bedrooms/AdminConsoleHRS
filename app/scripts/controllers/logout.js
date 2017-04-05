'use strict';

/**
 * @ngdoc function
 * @name adminConsoleHrsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the adminConsoleHrsApp
 */

angular.module('adminConsoleHrsApp')
  .controller('logoutCtrl', function ($rootScope, $location, authenticationSvc) {

    var vm = this;   

        vm.loggedOutUser = function logoutUser() {
            authenticationSvc.logoutUser();
            $location.path('login');
          }    
  });
