(function () {
    'use strict';

    angular
        .module('app')
        .factory('subjectService', ['$http', '$q', function ($http, $q) {
            var service = {};

            service.getSubjects = function () {
                var deferred = $q.defer();
                $http.get('/Subject/Index').then(function (result) {
                    deferred.resolve(result.data);
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.getSubjectById = function (id) {
                var deferred = $q.defer();
                $http.get('/Subject/Details/' + id).then(function (result) {
                    deferred.resolve(result.data);
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.addSubject = function (subject) {
                var deferred = $q.defer();
                $http.post('/Subject/Create', subject).then(function () {
                    deferred.resolve();
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.editSubject = function (subject) {
                var deferred = $q.defer();
                $http.post('/Subject/Edit', subject).then(function () {
                    deferred.resolve();
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.deleteSubject = function (id) {
                var deferred = $q.defer();
                $http.post('/Subject/Delete', { id: id }).then(function () {
                    deferred.resolve();
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            return service;
        }]);
})();