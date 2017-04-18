var app = angular.module('adminConsoleHrsApp', '');

app.factory("adminConsoleSvc", function ($http, $q, $window, $rootScope) {
    var SessionInfo;
    //var urlEndpoint = 'http://181.54.45.243/HRStaffingService/HRAPISevice.svc/';
    //var urlEndpoint = 'http://localhost:54491/HRAPISevice.svc/';
    var urlEndpoint = 'http://50.63.165.189/HRSService/HRAPISevice.svc/';

    return {
        getAllModules: getAllModules
    };


    function getAllModules() {
        var deferred = $q.defer();

        $http({
            method: 'GET',
            url: urlEndpoint + 'GetAllModules'
        })
        .then(function (response) {
            SessionInfo = true;
            deferred.resolve(SessionInfo);
        },
        function (response) { // optional
            deferred.reject(error);
        });

        return deferred.promise;
    }
});