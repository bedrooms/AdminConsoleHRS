var app = angular.module('adminConsoleHrsApp', '');

app.factory("authenticationSvc", function ($http, $q, $window, $rootScope) {
    var userInfo;

    var urlEndpoint = 'http://50.63.165.189/HRSService/HRAPISevice.svc/';

    function getUserInfo() {
        return userInfo;
    }

    function login(userName, password) {
        var deferred = $q.defer();

        $http({
            method: 'GET',
            url: urlEndpoint + 'GetLoginUser/',
            params: {
                userName: userName,
                password: password
            }
        })
        .then(function (response) {
            userInfo = {
                lastSession: response.data.GetLoginUserAuthResult.LastSession,
                userMail: response.data.GetLoginUserAuthResult.Email,
                loginSuccess: response.data.GetLoginUserAuthResult.LoggedSuccess,
                firstName: response.data.GetLoginUserAuthResult.FirstName,
                lastName: response.data.GetLoginUserAuthResult.LastName
            };           
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
        $window.sessionStorage["userInfo"] = null;
        userInfo = undefined;
        $rootScope.login = false;
    }

    function logout() {
        var deferred = $q.defer();

        $http({
            method: 'GET',
            url: urlEndpoint + 'GetLoginUser/',
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
        logout: logout,
        logoutUser: logoutUser
    };
});