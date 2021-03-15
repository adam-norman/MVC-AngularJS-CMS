(function () {
    'use strict';

    angular
        .module('app')
        .controller('subjectCtrl', ['$scope', '$filter', 'subjectService', 'teacherService', function ($scope, $filter, subjectService) {
            $scope.subjects = [];

            $scope.currentPage = 1;
            $scope.itemsPerPage = 10;

            getData();

            function getData() {
                subjectService.getSubjects().then(function (result) {
                    $scope.$watch('searchText', function (term) {
                        $scope.subjects = $filter('filter')(result, term);
                    });
                });
            }

            $scope.deleteSubject = function (id) {
                subjectService.deleteSubject(id).then(function () {
                    toastr.success('Subject deleted successfully');
                    getData();
                }, function () {
                    toastr.error('Error in deleting subject with Id: ' + id);
                });
            };

            $scope.sortBy = function (column) {
                $scope.sortColumn = column;
                $scope.reverse = !$scope.reverse;
            };
        }])
        .controller('subjectAddCtrl', ['$scope', '$location', 'subjectService', 'teacherService', 'courseService', function ($scope, $location, subjectService, teacherService, courseService) {
            $scope.teachers = [];
            $scope.courses = [];
            getTeachers();
            function getTeachers() {
                teacherService.getTeachers().then(function (result) {
                    $scope.teachers = result;
                });
            }
            getCourses();
            function getCourses() {
                courseService.getCourses().then(function (result) {
                    $scope.courses = result;
                });
            }
            $scope.createSubject = function (subject) {
                subjectService.addSubject(subject).then(function () {
                    toastr.success('Subject created successfully');
                    $location.path('/subjects');
                }, function () {
                    toastr.error('Error in creating subject');
                });
            };
            
        }])
        .controller('subjectEditCtrl', ['$scope', '$routeParams', '$location', 'subjectService', 'teacherService', 'courseService', function ($scope, $routeParams, $location, subjectService, teacherService, courseService) {
            $scope.subject = {};
            $scope.teachers = [];
            $scope.courses = [];
            $scope.states = {
                showUpdateButton: false
            };

            subjectService.getSubjectById($routeParams.id).then(function (result) {
                $scope.subject = result;
                $scope.states.showUpdateButton = true;
            }, function () {
                toastr.error('Error in fetching subject with Id: ' + $routeParams.id);
            });

            getTeachers();
            function getTeachers() {
                teacherService.getTeachers().then(function (result) {
                    $scope.teachers = result;
                });
            }


            getCourses();
            function getCourses() {
                courseService.getCourses().then(function (result) {
                    $scope.courses = result;
                });
            }
            //$scope.findTeacher = function (id) {
            //    return $scope.teachers.find(function (x) {
            //        return x.id == id
            //    })
            //};




            $scope.updateSubject = function (subject) {
                subjectService.editSubject(subject).then(function () {
                    toastr.success('Subject updated successfully');
                    $location.path('/subjects');
                }, function () {
                    toastr.error('Error in updating subject');
                });
            };
        }]);
})();