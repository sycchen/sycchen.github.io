angular.module('indexApp').controller("ContactController", ['$scope', function($scope) {
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