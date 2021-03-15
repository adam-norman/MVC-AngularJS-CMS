(function () {
    'use strict';

    angular
        .module('app')
        .factory('gradeService', ['$http', '$q', function ($http, $q) {
            var service = {};

            service.getGrades = function () {
                var deferred = $q.defer();
                $http.get('/Grade/Index').then(function (result) {
                  
                    deferred.resolve(result.data);
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.getGradeById = function (id) {
                var deferred = $q.defer();
                $http.get('/Grade/Details/' + id).then(function (result) {
                    deferred.resolve(result.data);
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.addGrade = function (grade) {
                var deferred = $q.defer();
                $http.post('/Grade/Create', grade).then(function () {
                    deferred.resolve();
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.editGrade = function (grade) {
                var deferred = $q.defer();
                $http.post('/Grade/Edit', grade).then(function () {
                    deferred.resolve();
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.deleteGrade = function (id) {
                var deferred = $q.defer();
                $http.post('/Grade/Delete', { id: id }).then(function () {
                    deferred.resolve();
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            return service;
        }]);
})();