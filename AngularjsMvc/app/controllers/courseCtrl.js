(function () {
    'use strict';

    angular
        .module('app')
        .controller('courseCtrl', ['$scope', '$filter', 'courseService', function ($scope, $filter, courseService) {
            $scope.courses = [];
            $scope.currentPage = 1;
            $scope.itemsPerPage = 10;

            getData();

            function getData() {
                courseService.getCourses().then(function (result) {
                    $scope.$watch('searchText', function (term) {
                        $scope.courses = $filter('filter')(result, term);
                    });
                });
            }

            $scope.deleteCourse = function (id) {
                courseService.deleteCourse(id).then(function () {
                    toastr.success('Course deleted successfully');
                    getData();
                }, function () {
                    toastr.error('Error in deleting course with Id: ' + id);
                });
            };

            $scope.sortBy = function (column) {
                $scope.sortColumn = column;
                $scope.reverse = !$scope.reverse;
            };
        }])
        .controller('courseAddCtrl', ['$scope', '$location', 'courseService', function ($scope, $location, courseService) {
            $scope.createCourse = function (course) {
                courseService.addCourse(course).then(function () {
                    toastr.success('Course created successfully');
                    $location.path('/courses');
                }, function () {
                    toastr.error('Error in creating course');
                });
            };
        }])
        .controller('courseEditCtrl', ['$scope', '$routeParams', '$location', 'courseService', function ($scope, $routeParams, $location, courseService) {
            $scope.course = {};
            $scope.states = {
                showUpdateButton: false
            };

            courseService.getCourseById($routeParams.id).then(function (result) {
                $scope.course = result;
                $scope.states.showUpdateButton = true;
            }, function () {
                toastr.error('Error in fetching course with Id: ' + $routeParams.id);
            });

            $scope.updateCourse = function (course) {
                courseService.editCourse(course).then(function () {
                    toastr.success('Course updated successfully');
                    $location.path('/courses');
                }, function () {
                    toastr.error('Error in updating course');
                });
            };
        }]);
})();