var myApp = angular.module('indexApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: '/app/pages/home.html',
            activeLink: 'Home'
        })
        .when('/projects', {
            templateUrl: '/app/pages/projects.html',
            activeLink: 'Projects'
        })
        .when('/projects/project1', {
            templateUrl: '/app/pages/projects/project1.html',
            activeLink: 'Projects'
        })
        .when('/projects/project2', {
            templateUrl: '/app/pages/projects/project2.html',
            activeLink: 'Projects'
        })
        .when('/resume', {
            templateUrl: '/app/pages/resume.html',
            activeLink: 'Projects'
        })
        .when('/about', {
            templateUrl: '/app/pages/about.html',
            activeLink: 'About'
        })
        .when('/contact', {
            templateUrl: '/app/pages/contact.html',
            activeLink: 'Contact'
        })
        .otherwise({redirectTo:'/'});
}]).controller("HeaderController", ['$scope', '$route', function($scope, $route) {
    $scope.$route = $route;
}]);