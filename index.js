var myApp = angular.module('indexApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: '/app/index-body.html',
            activeLink: 'home'
        })
        .when('/projects', {
            templateUrl: '/app/index-body.html',
            activeLink: 'projects'
        })
        .when('/resume', {
            templateUrl: '/app/index-body.html',
            activeLink: 'resume'
        })
        .when('/about', {
            templateUrl: '/app/index-body.html',
            activeLink: 'about'
        })
        .when('/contact', {
            templateUrl: '/app/index-body.html',
            activeLink: 'contact'
        })
        .otherwise({redirectTo:'/'});
}]).controller("HeaderController", ['$scope', '$route', function($scope, $route) {
    $scope.$route = $route;
}]);