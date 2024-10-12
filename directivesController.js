(function() {
    var app = angular.module('directivesModule', []);

    // var injectParams = ['$scope'];

    var CustomersController = function ($scope) {
        $scope.customer = {
            name: 'David',
            street: '1234 AL St.'
        }
    }

    CustomersController.$inject = ['$scope'];

    app
    .controller("CustomersController", CustomersController);
})();