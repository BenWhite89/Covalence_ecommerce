angular.module('store', ['ngRoute', 'ngResource', 'store.controllers', 'store.directives', 'store.factories'])

    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/', {
                templateUrl: 'Views/home.html',
                controller: 'HomeController'
            })
            .when('/cart', {
                templateUrl: 'Views/cart.html',
                controller: 'CartController'
            })
            .when('/contact', {
                templateUrl: 'Views/contact.html',
                controller: 'ContactController'
            })
            .when('/apparel', {
                templateUrl: 'Views/apparel.html',
                controller: 'CategoryController'
            })
            .when('/misc', {
                templateUrl: 'Views/misc.html',
                controller: 'CategoryController'
            })
            .when('/product/:id', {
                templateUrl: 'Views/single.html',
                controller: 'SingleController'
            })
            .otherwise({
                redirectTo: '/home'
            });

    }])