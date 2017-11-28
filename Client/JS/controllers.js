angular.module('store.controllers', ['ngResource', 'ngRoute'])

    .controller('HomeController', [function() {

    }])

    .controller('NavbarController', ['$scope', 'CartService', function($scope, CartService) {
        $scope.cartCount = CartService.getCount();
    }])

    .controller('CartController', [function() {

    }])

    .controller('CategoryController', ['$scope', '$location', '$routeParams', 'Product', function($scope, $location, $routeParams, Product) {
        $scope.category = $location.url().substr(1);

        Product.query(function(data) {
            $scope.products = data;
        })
    }])

    .controller('SingleController', ['$scope', '$location', '$routeParams', 'Product', 'CartService', function($scope, $location, $routeParams, Product, CartService) {
        Product.get({ id: $routeParams.id}, function(data) {
            $scope.product = data;
        })

        console.log(CartService.getCart());

        $scope.addToCart = function() {
            CartService.addItem($scope.product);
            console.log(CartService.getCart());
            console.log(CartService.getTotal());
        }
    }])

    .controller('ContactController', [function() {

    }]);