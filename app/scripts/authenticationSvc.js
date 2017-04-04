var app = angular.module('adminConsoleHrsApp', '');

app.factory("authenticationSvc", function ($http, $q, $window, $rootScope) {
    var userInfo;

    function getUserInfo() {
        return userInfo;
    }

    function login(userName, password) {
        var deferred = $q.defer();

        $http({
            method: 'GET',
            url: 'http://localhost:54491/HRAPISevice.svc/GetLoginUser/',
            params: {
                userName: userName,
                password: password
            }
        })
            .then(function (response) {
                userInfo = {
                    lastSession: response.data.GetLoginUserAuthResult.LastSession,
                    userMail: response.data.GetLoginUserAuthResult.Email,
                    loginSuccess: response.data.GetLoginUserAuthResult.LoggedSuccess
                };
                $rootScope.login = true;
                $window.sessionStorage["userInfo"] = JSON.stringify(userInfo);
                deferred.resolve(userInfo);
            },
            function (response) { // optional
                deferred.reject(error);
            });

        return deferred.promise;
    }

    function init() {
        if ($window.sessionStorage["userInfo"]) {
            userInfo = JSON.parse($window.sessionStorage["userInfo"]);
        }
    }

    init();

 function logoutUser() {
 userInfo = undefined;           
 }

    function logout() {
        var deferred = $q.defer();

        $http({
          method: 'GET',
            url: 'http://localhost:54491/HRAPISevice.svc/GetLoginUser/',
            params: {
                userName: userName,
                password: password
            }
        }).then(function (result) {
            userInfo = null;            
            $window.sessionStorage["userInfo"] = null;
            deferred.resolve(result);
        }, function (error) {
            deferred.reject(error);
        });

        return deferred.promise;
    }


    return {
        login: login,
        getUserInfo: getUserInfo,
        logout : logout,
        logoutUser : logoutUser
    };
});