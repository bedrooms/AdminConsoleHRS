
var app = angular.module('adminConsoleHrsApp', '');

app.controller('sessionLogInCtrl', ['$rootScope', 'authenticationSvc', '$location', function ($rootScope, authenticationSvc, $location) {
    var vm = this;

    var userInfo = authenticationSvc.getUserInfo();
    vm.loginFail = false;

    if (userInfo == undefined) {
        $rootScope.login = false;
    }
    else{
        if(userInfo.loginSuccess){
                $rootScope.login = true;
            }else{
                $rootScope.login = false;
            }
    }

    vm.loggedUser = function logInUser(userName, password) {
        authenticationSvc.login(userName, password)
        .then(function (response) {            
            if (response.loginSuccess == true) {
                $location.path('main');
                vm.userLogged = response;
            }else{
                 $rootScope.login = false;
                vm.loginFail = true;
            }

        });

    }

}]);