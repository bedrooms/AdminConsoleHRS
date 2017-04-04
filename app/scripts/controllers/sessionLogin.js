
var app = angular.module('adminConsoleHrsApp', '');

app.controller('sessionLogInCtrl', ['$rootScope', 'authenticationSvc', '$location', function ($rootScope, authenticationSvc, $location) {
    var vm = this;
    var userInfo = authenticationSvc.getUserInfo();
    if (userInfo == undefined) {
        $rootScope.login = false;
    }
    else{
         $rootScope.login = true;
    }

    vm.loggedUser = function logInUser(userName, password) {

        authenticationSvc.login(userName, password).then(function (response) {
            vm.userLogged = response;
            if (response.loginSuccess == true) {
                $location.path('main');
            }
        });

    }

}]);