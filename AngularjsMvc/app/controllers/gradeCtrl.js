(function () {
    'use strict';

    angular
        .module('app')
        .controller('gradeCtrl', ['$scope', '$filter', 'gradeService', function ($scope, $filter, gradeService) {
            $scope.grades = [];
            $scope.currentPage = 1;
            $scope.itemsPerPage = 10;

            getData();

            function getData() {
                gradeService.getGrades().then(function (result) {
                    $scope.$watch('searchText', function (term) {
                        $scope.grades = $filter('filter')(result, term);
                    });
                });
            }

            $scope.deleteGrade = function (id) {
                gradeService.deleteGrade(id).then(function () {
                    toastr.success('Grade deleted successfully');
                    getData();
                }, function () {
                    toastr.error('Error in deleting grade with Id: ' + id);
                });
            };

            $scope.sortBy = function (column) {
                $scope.sortColumn = column;
                $scope.reverse = !$scope.reverse;
            };
        }])
        .controller('gradeAddCtrl', ['$scope', '$location', 'gradeService', function ($scope, $location, gradeService) {
            $scope.createGrade = function (grade) {
                gradeService.addGrade(grade).then(function () {
                    toastr.success('Grade created successfully');
                    $location.path('/grades');
                }, function () {
                    toastr.error('Error in creating grade');
                });
            };
        }])
        .controller('gradeEditCtrl', ['$scope', '$routeParams', '$location', 'gradeService', function ($scope, $routeParams, $location, gradeService) {
            $scope.grade = {};
            $scope.states = {
                showUpdateButton: false
            };

            gradeService.getGradeById($routeParams.id).then(function (result) {
                $scope.grade = result;
                $scope.states.showUpdateButton = true;
            }, function () {
                toastr.error('Error in fetching grade with Id: ' + $routeParams.id);
            });

            $scope.updateGrade = function (grade) {
                gradeService.editGrade(grade).then(function () {
                    toastr.success('Grade updated successfully');
                    $location.path('/grades');
                }, function () {
                    toastr.error('Error in updating grade');
                });
            };
        }]);
})();