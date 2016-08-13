angular.module('indexApp', ['ngRoute']).config(['$routeProvider', function($routeProvider){
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
        .when('/projects/:id', {
            templateUrl: '/app/pages/projects/project-template.html',
            controller: 'ProjectTemplateController',
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
}]).controller("HeaderController", ['$scope', '$route', '$http', function($scope, $route, $http) {
    $scope.$route = $route;

    $http.get('/app/data/projects.json').success(function(data){
        $scope.projects = data;
    });
}]).directive('oneTimeAd', function() {
    return {
        link: function(scope, element, attrs) {
            if (readCookie(cookiePrefix + element[0].id) == null) {
                // Remove the comments
                for (var i=0; i < element[0].childNodes.length; i++) {
                    var child = element[0].childNodes[i];

                    if (child.nodeType == Node.COMMENT_NODE) {
                        element[0].innerHTML = child.data;

                        // Run script code we find
                        var node = element[0].firstChild;
                        while (node != null) {
                            if (node.nodeName == 'SCRIPT') {
                                eval(node.text);
                            }
                            node = node.nextSibling;
                        }
                        break;
                    }
                }
            } else {
                // Delete the element
                element[0].parentElement.parentElement.removeChild(element[0].parentElement);
            }
        }
    };
});

