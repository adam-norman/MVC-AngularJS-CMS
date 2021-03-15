(function () {
    'use strict';

    angular
        .module('app')
        .factory('teacherService', ['$http', '$q', function ($http, $q) {
            var service = {};

            service.getTeachers = function () {
                var deferred = $q.defer();
                $http.get('/Teacher/Index').then(function (result) {
                    deferred.resolve(result.data);
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.getTeacherById = function (id) {
                var deferred = $q.defer();
                $http.get('/Teacher/Details/' + id).then(function (result) {
                    deferred.resolve(result.data);
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.addTeacher = function (teacher) {
                var deferred = $q.defer();
                $http.post('/Teacher/Create', teacher).then(function () {
                    deferred.resolve();
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.editTeacher = function (teacher) {
                var deferred = $q.defer();
                $http.post('/Teacher/Edit', teacher).then(function () {
                    deferred.resolve();
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.deleteTeacher = function (id) {
                var deferred = $q.defer();
                $http.post('/Teacher/Delete', { id: id }).then(function () {
                    deferred.resolve();
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            return service;
        }]);
})();