(function () {
    'use strict';

    angular
        .module('app')
        .factory('registrationService', ['$http', '$q', function ($http, $q) {
            var service = {};

            service.getRegistrations = function () {
                var deferred = $q.defer();
                $http.get('/Registration/Index').then(function (result) {
                    deferred.resolve(result.data);
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.getRegistrationById = function (id) {
                var deferred = $q.defer();
                $http.get('/Registration/Details/' + id).then(function (result) {
                    console.log(id);
                    console.log(result.data);
                    deferred.resolve(result.data);
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.addRegistration = function (registration) {
                var deferred = $q.defer();
                $http.post('/Registration/Create', registration).then(function () {
                    deferred.resolve();
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.editRegistration = function (registration) {
                debugger;
                var deferred = $q.defer();
                $http.post('/Registration/Edit', registration).then(function () {
                    deferred.resolve();
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.deleteRegistration = function (id) {
                var deferred = $q.defer();
                $http.post('/Registration/Delete', { id: id }).then(function () {
                    deferred.resolve();
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            return service;
        }]);
})();