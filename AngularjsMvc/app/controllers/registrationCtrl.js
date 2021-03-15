(function () {
    'use strict';

    angular
        .module('app')
        .controller('registrationCtrl', ['$scope', '$filter', 'registrationService', 'teacherService', function ($scope, $filter, registrationService) {
            $scope.registrations = [];

            $scope.currentPage = 1;
            $scope.itemsPerPage = 10;

            getData();
            function getData() {
                registrationService.getRegistrations().then(function (result) {
                    $scope.$watch('searchText', function (term) {
                        $scope.registrations = $filter('filter')(result, term);
                    });
                });
            }

            $scope.deleteRegistration = function (id) {
                registrationService.deleteRegistration(id).then(function () {
                    toastr.success('Registration deleted successfully');
                    getData();
                }, function () {
                    toastr.error('Error in deleting registration with Id: ' + id);
                });
            };

            $scope.sortBy = function (column) {
                $scope.sortColumn = column;
                $scope.reverse = !$scope.reverse;
            };
        }])
        .controller('registrationAddCtrl', ['$scope', '$location', 'registrationService', 'gradeService', 'subjectService', 'studentService', function ($scope, $location, registrationService, gradeService, subjectService, studentService) {
            $scope.grades = [];
            $scope.subjects = [];
            $scope.students = [];
            getGrades();

            function getGrades() {
                gradeService.getGrades().then(function (result) {
                    $scope.grades = result;
                });
            }
            getSubjects();
            function getSubjects() {
                subjectService.getSubjects().then(function (result) {
                    $scope.subjects = result;
                });
            }
            getStudents();
            function getStudents() {
                studentService.getStudents().then(function (result) {
                    $scope.students = result;
                });
            }

            $scope.createRegistration = function (registration) {
                registrationService.addRegistration(registration).then(function () {
                    toastr.success('Registration created successfully');
                    $location.path('/registrations');
                }, function () {
                    toastr.error('Error in creating registration');
                });
            };

        }])
        .controller('registrationEditCtrl', ['$scope', '$routeParams', '$location', 'registrationService', 'gradeService', 'subjectService', 'studentService', function ($scope, $routeParams, $location, registrationService, gradeService, subjectService, studentService) {
            $scope.grades = [];
            $scope.subjects = [];
            $scope.students = [];
            $scope.states = {
                showUpdateButton: false
            };

            registrationService.getRegistrationById($routeParams.id).then(function (result) {
                $scope.registration = result;
                $scope.states.showUpdateButton = true;
            }, function () {
                toastr.error('Error in fetching registration with Id: ' + $routeParams.id);
            });

            getGrades();
            function getGrades() {
                gradeService.getGrades().then(function (result) {
                    $scope.grades = result;
                });
            }
            getSubjects();
            function getSubjects() {
                subjectService.getSubjects().then(function (result) {
                    $scope.subjects = result;
                });
            }
            getStudents();
            function getStudents() {
                studentService.getStudents().then(function (result) {
                    console.log(result);
                    $scope.students = result;
                });
            }

           

            $scope.updateRegistration = function (registration) {
                registrationService.editRegistration(registration).then(function () {
                    toastr.success('Registration updated successfully');
                    $location.path('/registrations');
                }, function () {
                    toastr.error('Error in updating registration');
                });
            };
        }]);
})();