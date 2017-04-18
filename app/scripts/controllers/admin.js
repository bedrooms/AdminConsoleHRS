'use strict';

/**
 * @ngdoc function
 * @name adminConsoleHrsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the adminConsoleHrsApp
 */

angular.module('adminConsoleHrsApp')
  .controller('adminCtrl', function (adminConsoleSvc) {

    var vm = this;

    var svc = adminConsoleSvc;

     svc.getAllModules().then(function(response){
    vm.modules = response.data.GetAllAdminModulesResult;     
  });  

  });
