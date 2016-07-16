var myApp = angular.module('indexApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: '/app/index-body.html',
            activeLink: 'Home'
        })
        .when('/projects', {
            templateUrl: '/app/index-body.html',
            activeLink: 'Projects'
        })
        .when('/resume', {
            templateUrl: '/app/index-body.html',
            activeLink: 'Resume'
        })
        .when('/about', {
            templateUrl: '/app/index-body.html',
            activeLink: 'About'
        })
        .when('/contact', {
            templateUrl: '/app/index-body.html',
            activeLink: 'Contact'
        })
        .otherwise({redirectTo:'/'});
}]).controller("HeaderController", ['$scope', '$route', function($scope, $route) {
    $scope.$route = $route;
}]);