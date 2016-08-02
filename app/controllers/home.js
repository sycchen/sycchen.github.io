angular.module('indexApp').controller("HomeController", ['$scope', function($scope) {
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