angular.module('store.directives', ['ngRoute', 'store.controllers'])

    .directive('storeNav', [function() {
        return {
            restrict: 'E',
            templateUrl: '../Views/navbar.html',
            controller: 'NavbarController'
        };
    }]);