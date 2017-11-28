angular.module('store', ['ngRoute', 'ngResource', 'store.controllers', 'store.directives', 'store.factories'])

    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        console.log('begin')
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
                templateUrl: 'Views/category.html',
                controller: 'CategoryController'
            })
            .when('/misc', {
                templateUrl: 'Views/category.html',
                controller: 'CategoryController'
            })
            .when('/:id/product', {
                templateUrl: 'Views/single.html',
                controller: 'SingleController'
            })
            .otherwise({
                redirectTo: '/'
            });

            $locationProvider.html5Mode(true);
            

    }])