angular.module('store.services', [])
    .service('CartService', ['$rootScope', function($rootScope) {
        let cartList = [];
        $rootScope.total = 0;
        $rootScope.count = 0;

        return {
            getCart: getCart,
            addItem: addItem,
            removeItem: removeItem,
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
            $rootScope.count += 1;
            $rootScope.total += product.price;
        }

        function removeItem(product) {
            let index = findInArray(cartList, product.productId);

            if (index !== null && cartList[index].count > 1) {
                cartList[index].count -= 1;
                $rootScope.count -= 1;
                $rootScope.total -= product.price;
            } else if(index !== null && cartList[index].count === 1) {
                cartList.splice(index, 1);
                $rootScope.count -= 1;
                $rootScope.total -= product.price;
            }
        }

        function deleteItem(product) {
            let index = findInArray(cartList, product.productId);

            if (index !== null) {
                $rootScope.count -= cartList[index].count;
                $rootScope.total -= (cartList[index].count * cartList[index].price);
                cartList.splice(index,1);

            }
        }

        function getTotal() {
            return $rootScope.total;
        }

        function getCount() {
            return count;
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

