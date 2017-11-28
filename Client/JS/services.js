angular.module('store.services', [])
    .service('CartService', ['$rootScope', function($rootScope) {
        let cartList = [];

        return {
            getCart: getCart,
            addItem: addItem,
            deleteItem: deleteItem,
            getTotal: getTotal,
            getCount: getCount
        }

        function getCart() {
            return cartList;
        }

        function addItem(product) {
            cartList.push(product);
            getCount();
        }

        function deleteItem(product) {
            let index = cartList.findIndex(product);

            if (index > -1) {
                cartList.splice(index, 1);
                getCount();
            }
        }

        function getTotal() {
            let total = 0;
            cartList.forEach(function(element) {
                total += element.price;
            })
            return total;
        }

        function getCount() {
            let count = cartList.length;

            if (count) {
                $rootScope.cartCount = count;
            } else {
                $rootScope.cartCount = 0;
            }

        }
    }])