(function() {
    var app = angular.module('directivesModule');

    app.directive('isolateScopeWithObject', function() {
        return {
            scope: {
                datasource: '=' // @ allow to passes string in to directive
            },
            template: 'Name: {{ datasource.name }} Street: {{ datasource.street }}' +
            '<br/><button ng-click="datasource.name=\'Fred\'">' +
            'Change</button>'
        }
    });
})();