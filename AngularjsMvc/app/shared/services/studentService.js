(function () {
    'use strict';

    angular
        .module('app')
        .factory('studentService', ['$http', '$q', function ($http, $q) {
            var service = {};

            service.getStudents = function () {
                var deferred = $q.defer();
                $http.get('/Student/Index').then(function (result) {
                    deferred.resolve(result.data);
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.getStudentById = function (id) {
                var deferred = $q.defer();
                $http.get('/Student/Details/' + id).then(function (result) {
                    deferred.resolve(result.data);
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.addStudent = function (student) {
                var deferred = $q.defer();
                $http.post('/Student/Create', student).then(function () {
                    deferred.resolve();
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.editStudent = function (student) {
                var deferred = $q.defer();
                $http.post('/Student/Edit', student).then(function () {
                    deferred.resolve();
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.deleteStudent = function (id) {
                var deferred = $q.defer();
                $http.post('/Student/Delete', { id: id }).then(function () {
                    deferred.resolve();
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            return service;
        }]);
})();