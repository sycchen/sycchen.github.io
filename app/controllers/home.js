angular.module('indexApp').controller("HomeController", ['$scope', '$http', function($scope, $http) {
    $http.get('/app/data/projects.json').success(function(data){
        $scope.projects = data;
    });
}]);