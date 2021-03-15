(function () {
    'use strict';

    angular
        .module('app')
        .controller('studentCtrl', ['$scope', '$filter', 'studentService', function ($scope, $filter, studentService) {
            $scope.students = [];
            $scope.currentPage = 1;
            $scope.itemsPerPage = 10;

            getData();

            function getData() {
                studentService.getStudents().then(function (result) {
                    $scope.$watch('searchText', function (term) {
                        $scope.students = $filter('filter')(result, term);
                    });
                });
            }

            $scope.deleteStudent = function (id) {
                studentService.deleteStudent(id).then(function () {
                    toastr.success('Student deleted successfully');
                    getData();
                }, function () {
                    toastr.error('Error in deleting student with Id: ' + id);
                });
            };

            $scope.sortBy = function (column) {
                $scope.sortColumn = column;
                $scope.reverse = !$scope.reverse;
            };
        }])
        .controller('studentAddCtrl', ['$scope', '$location', 'studentService', function ($scope, $location, studentService) {
            $scope.createStudent = function (student) {
                studentService.addStudent(student).then(function () {
                    toastr.success('Student created successfully');
                    $location.path('/students');
                }, function () {
                    toastr.error('Error in creating student');
                });
            };
        }])
        .controller('studentEditCtrl', ['$scope', '$routeParams', '$location', 'studentService', function ($scope, $routeParams, $location, studentService) {
            $scope.student = {};
            $scope.states = {
                showUpdateButton: false
            };

            studentService.getStudentById($routeParams.id).then(function (result) {
                $scope.student = result;
                $scope.states.showUpdateButton = true;
            }, function () {
                toastr.error('Error in fetching student with Id: ' + $routeParams.id);
            });

            $scope.updateStudent = function (student) {
                studentService.editStudent(student).then(function () {
                    toastr.success('Student updated successfully');
                    $location.path('/students');
                }, function () {
                    toastr.error('Error in updating student');
                });
            };
        }]);
})();