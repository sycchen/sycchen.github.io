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
            controller: 'ContactController',
            activeLink: 'Contact'
        })
        .otherwise({redirectTo:'/'});
}]).controller("HeaderController", ['$scope', '$route', function($scope, $route) {
    $scope.$route = $route;
}]).controller("ContactController", ['$scope', function($scope) {
    $scope.successAlert = false;
    $scope.errorAlert = false;

    $scope.contactMethod = 'email';
    $scope.email = '';
    $scope.message = '';

    $scope.hideSuccessAlert = function() {
        $scope.successAlert = false;
    }

    $scope.hideErrorAlert = function() {
        $scope.errorAlert = false;
    }

    $scope.sendMessage = function() {
        var data;

        switch ($scope.contactMethod) {
            case 'email':
                data = {
                    contact: {
                        email: $scope.email
                    },
                    message: $scope.message
                };
                break;
            case 'anonymous':
                data = {
                    message: $scope.message
                };
                break;
        }

        // TODO:: Send data to server
        var jsonPackage = JSON.stringify(data);

        // Wipe data to prevent resending by accident
        $scope.email = '';
        $scope.message = '';
        $scope.successAlert = true;
    }
}]);