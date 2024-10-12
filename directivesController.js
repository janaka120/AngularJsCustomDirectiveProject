(function() {
    var app = angular.module('directivesModule', []);

    // var injectParams = ['$scope'];

    var CustomersController = function ($scope) {
        var counter = 0;
        $scope.customer = {
            name: 'David',
            street: '1234 AL St.'
        }

        $scope.changeData = function() {
            counter ++
            $scope.customer = {
                name: 'James',
                street: counter + ' Cedar point St.'
            }
        }
    }

    CustomersController.$inject = ['$scope'];

    app
    .controller("CustomersController", CustomersController);
})();