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
        .when('/projects/oneTimeAds', {
            templateUrl: '/app/pages/projects/one-time-ads.html',
            controller: 'OneTimeAds',
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
}]).directive('oneTimeAd', function() {
    return {
        link: function(scope, element, attrs) {
            var clickedAds = readCookie('Clicked_Ads');

            if (clickedAds == null || clickedAds.search(element[0].id) < 0) {
                // Replace comment with html
                for (const child of element[0].childNodes) {
                    if (child.nodeType == Node.COMMENT_NODE) {
                        element[0].innerHTML = child.data;
                        break;
                    }
                }
            } else {
                // Delete the element
                element[0].parentElement.removeChild(element[0]);
                i--;
            }
        }
    };
});

