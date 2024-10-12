(function() {
    var app = angular.module('directivesModule');

    app.directive('isolateScopeWithString', function() {
        return {
            scope: {
                name: '@' // @ allow to passes string in to directive
            },
            template: 'Name: {{ name }} Street: {{ street }}'
        }
    });
})()