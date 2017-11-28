angular.module('store.controllers', ['ngResource', 'ngRoute'])

    .controller('HomeController', [function() {

    }])

    .controller('NavbarController', [function() {

    }])

    .controller('CartController', [function() {

    }])

    .controller('CategoryController', ['$scope', '$location', '$routeParams', 'Product', function($scope, $location, $routeParams, Product) {
        $scope.category = $location.url().substr(1);

        Product.query(function(data) {
            $scope.products = data;
        })
    }])

    .controller('SingleController', ['$scope', '$location', '$routeParams', 'Product', function($scope, $location, $routeParams, Product) {
        Product.get({ id: $routeParams.id}, function(data) {
            $scope.product = data;
        })
    }])

    .controller('ContactController', [function() {

    }]);