angular.module('store.directives', ['ngRoute', 'store.controllers'])

    .directive('StoreNav', [function() {
        return {
            restrict: 'E',
            templateUrl: '../Views/navbar.html',
            controller: 'NavbarController'
        };
    }]);