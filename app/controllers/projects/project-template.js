angular.module('indexApp').controller("ProjectTemplateController", ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('/app/data/projects.json').success(function(data){
        $scope.project = $.grep(data, function(e){ return e.id == $routeParams.id; })[0];

    });
}]);