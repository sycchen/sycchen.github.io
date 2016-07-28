var myApp = angular.module('indexApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: '/app/pages/home.html',
            controller: 'HomeController',
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
            activeLink: 'Resume'
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
}]).controller("HomeController", ['$scope', function($scope) {
    $scope.projects = [];

    var getPagePreview = function(link) {
        return "Insert Preview Here";
    }

    var init = function() {
        $.ajax({
            url: "/app/pages/projects/",
            success: function(data) {
                $(data).find("a:contains(.html)").each(function() {
                    var link = $(this).attr("href");
                    $scope.projects.push(
                        {   href: "#" + link.replace(/\/app\/pages(.*)\.html/i,
                                            function(match, p1, offset, string) {return p1}),
                            preview: getPagePreview(link)}
                    );
                });

                $scope.$apply();
            }
        });
    };

    init();
}]);