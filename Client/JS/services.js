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

            if (!cartList[0]) {
                cartList.push(product);
            } else {
                let index = findInArray(cartList, product.productId);

                if (index !== null) {
                    cartList[index].count += 1;
                } else {
                    cartList.push(product);
                }
                
            }
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
                total += (element.price * element.count);
            })
            return total;
        }

        function getCount() {
            let count = 0;

            for (let i = 0; i < cartList.length; i++) {
                count += cartList[i].count;
            }

            if (count) {
                $rootScope.cartCount = count;
            } else {
                $rootScope.cartCount = 0;
            }

        }

        function findInArray(array, id) {
            for (let i = 0; i < array.length; i++) {
                if (array[i].productId === id) {
                    return i;
                }
            }
            return null;
        }
    }])

