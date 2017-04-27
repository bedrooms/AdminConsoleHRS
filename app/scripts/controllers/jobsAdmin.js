
var app = angular.module('adminConsoleHrsApp', '');

app.controller('jobsAdminInCtrl', ['$rootScope', '$location', 'authenticationSvc', function ($rootScope, $location, authenticationSvc) {
    var vm = this;

    vm.myDate = new Date();
    vm.isOpen = false;
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

}]);