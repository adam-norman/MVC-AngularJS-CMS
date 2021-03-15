(function () {
    'use strict';

    angular
        .module('app', [
            'ngRoute',
            'ui.bootstrap'
        ])
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $locationProvider.hashPrefix('');
            $routeProvider.caseInsensitiveMatch = true;
            $routeProvider
                .when('/', {
                    controller: 'teacherCtrl',
                    templateUrl: '/app/templates/index.html' 
                })
                .when('/teachers', {
                    controller: 'teacherCtrl',
                    templateUrl: '/app/templates/teachers/teachers.html'
                })
                .when('/addteacher', {
                    controller: 'teacherAddCtrl',
                    templateUrl: '/app/templates/teachers/teacherAdd.html'
                })
                .when('/editteacher/:id', {
                    controller: 'teacherEditCtrl',
                    templateUrl: '/app/templates/teachers/teacherEdit.html'
                })
                .when('/students', {
                    controller: 'studentCtrl',
                    templateUrl: '/app/templates/students/students.html'
                })
                .when('/addstudent', {
                    controller: 'studentAddCtrl',
                    templateUrl: '/app/templates/students/studentAdd.html'
                })
                .when('/editstudent/:id', {
                    controller: 'studentEditCtrl',
                    templateUrl: '/app/templates/students/studentEdit.html'
                })
                .when('/grades', {
                    controller: 'gradeCtrl',
                    templateUrl: '/app/templates/grades/grades.html'
                })
                .when('/editgrade/:id', {
                    controller: 'gradeEditCtrl',
                    templateUrl: '/app/templates/grades/gradeEdit.html'
                })
                .when('/addgrade', {
                    controller: 'gradeAddCtrl',
                    templateUrl: '/app/templates/grades/gradeAdd.html'
                })
                .when('/courses', {
                    controller: 'courseCtrl',
                    templateUrl: '/app/templates/courses/courses.html'
                })
                .when('/addcourse', {
                    controller: 'courseAddCtrl',
                    templateUrl: '/app/templates/courses/courseAdd.html'
                })
                .when('/editcourse/:id', {
                    controller: 'courseEditCtrl',
                    templateUrl: '/app/templates/courses/courseEdit.html'
                })
                .when('/subjects', {
                    controller: 'subjectCtrl',
                    templateUrl: '/app/templates/subjects/subjects.html'
                })
                .when('/addsubject', {
                    controller: 'subjectAddCtrl',
                    templateUrl: '/app/templates/subjects/subjectAdd.html'
                })
                .when('/editsubject/:id', {
                    controller: 'subjectEditCtrl',
                    templateUrl: '/app/templates/subjects/subjectEdit.html'
                })
                .when('/registrations', {
                    controller: 'registrationCtrl',
                    templateUrl: '/app/templates/registrations/registrations.html'
                })
                .when('/addregistration', {
                    controller: 'registrationAddCtrl',
                    templateUrl: '/app/templates/registrations/registrationAdd.html'
                })
                .when('/editregistration/:id', {
                    controller: 'registrationEditCtrl',
                    templateUrl: '/app/templates/registrations/registrationEdit.html'
                })
                .otherwise({
                    redirectTo: '/' 
                });
            $locationProvider.html5Mode(true);
        }]);
})();