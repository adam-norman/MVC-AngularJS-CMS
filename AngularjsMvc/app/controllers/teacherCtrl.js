(function () {
    'use strict';

    angular
        .module('app')
        .controller('teacherCtrl', ['$scope', '$filter', 'teacherService', function ($scope, $filter, teacherService) {
            $scope.teachers = [];
            $scope.currentPage = 1;
            $scope.itemsPerPage = 10;

            getData();

            function getData() {
                teacherService.getTeachers().then(function (result) {
                    $scope.$watch('searchText', function (term) {
                        $scope.teachers = $filter('filter')(result, term);
                    });
                });
            }

            $scope.deleteTeacher = function (id) {
                teacherService.deleteTeacher(id).then(function () {
                    toastr.success('Teacher deleted successfully');
                    getData();
                }, function () {
                    toastr.error('Error in deleting teacher with Id: ' + id);
                });
            };

            $scope.sortBy = function (column) {
                $scope.sortColumn = column;
                $scope.reverse = !$scope.reverse;
            };
        }])
        .controller('teacherAddCtrl', ['$scope', '$location', 'teacherService', function ($scope, $location, teacherService) {
            $scope.createTeacher = function (teacher) {
                teacherService.addTeacher(teacher).then(function () {
                    toastr.success('Teacher created successfully');
                    $location.path('/teachers');
                }, function () {
                    toastr.error('Error in creating teacher');
                });
            };
        }])
        .controller('teacherEditCtrl', ['$scope', '$routeParams', '$location', 'teacherService', function ($scope, $routeParams, $location, teacherService) {
            $scope.teacher = {};
            $scope.states = {
                showUpdateButton: false
            };

            teacherService.getTeacherById($routeParams.id).then(function (result) {
                $scope.teacher = result;
                $scope.states.showUpdateButton = true;
            }, function () {
                toastr.error('Error in fetching teacher with Id: ' + $routeParams.id);
            });

            $scope.updateTeacher = function (teacher) {
                teacherService.editTeacher(teacher).then(function () {
                    toastr.success('Teacher updated successfully');
                    $location.path('/teachers');
                }, function () {
                    toastr.error('Error in updating teacher');
                });
            };
        }]);
})();