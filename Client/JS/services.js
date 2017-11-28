angular.module('store.services', [])
    .service('CartService', [function() {
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
        }

        function deleteItem(product) {
            let index = cartList.findIndex(product);

            if (index > -1) {
                cartList.splice(index, 1);
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
            return cartList.length;
        }
    }])