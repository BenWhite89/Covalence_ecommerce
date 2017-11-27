angular.module('store', ['ngRoute', 'ngResource'])

    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        // $locationProvider.html5Mode({
        //     enabled: true,
        //     requireBase: false
        // });
        //$locationProvider.hashPrefix('!');

        $locationProvider.html5Mode(true);
        
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                // controller: 'homeController'
               
            })
            // .when('/apparel', {
            //     templateUrl: 'views/apparel.html',
            //     controller: 'apparelController'
            // })
            // .when('/misc', {
            //     templateUrl: 'views/misc.html',
            //     controller: 'miscController',
            // })
    
            // .when('/:id', {
            //     templateUrl: 'views/single.html',
            //     controller: 'singleController'
            // })
      
            //     .when('/contact',{
            //     templateUrl:'views/contact.html',
            //     controller:'contactController'
            // })

            // .when('/cart',{
            //     templateUrl: 'views/cart.html',
            //     controller: 'cartController'
            // })
            // .when('/userlist', {
            //     templateUrl: 'views/userlist.html',
            //     controller: 'UserListController'
            // })
           
            // .otherwise({
            //     redirectTo: '/home'
            // });
        
    }])