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

    var svc = authenticationSvc;  

        vm.loggedOutUser = function() {

        svc.logoutUser().then(function (response) {           
                $location.path('login');
            }
        );
    }    
  });
