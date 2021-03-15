(function () {
    'use strict';

    angular
        .module('app')
        .factory('courseService', ['$http', '$q', function ($http, $q) {
            var service = {};

            service.getCourses = function () {
                var deferred = $q.defer();
                $http.get('/Course/Index').then(function (result) {
                    deferred.resolve(result.data);
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.getCourseById = function (id) {
                var deferred = $q.defer();
                $http.get('/Course/Details/' + id).then(function (result) {
                    deferred.resolve(result.data);
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.addCourse = function (course) {
                var deferred = $q.defer();
                $http.post('/Course/Create', course).then(function () {
                    deferred.resolve();
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.editCourse = function (course) {
                var deferred = $q.defer();
                $http.post('/Course/Edit', course).then(function () {
                    deferred.resolve();
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.deleteCourse = function (id) {
                var deferred = $q.defer();
                $http.post('/Course/Delete', { id: id }).then(function () {
                    deferred.resolve();
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            return service;
        }]);
})();