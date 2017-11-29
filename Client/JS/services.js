angular.module('store.services', [])
    .service('CartService', ['$rootScope', function($rootScope) {
        let cartList = [];
        $rootScope.total = 0;
        $rootScope.count = 0;

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
            $rootScope.count += 1;
            $rootScope.total += product.price;
        }

        function deleteItem(product) {
            let index = cartList.findIndex(product);

            if (index > -1) {
                cartList.splice(index, 1);
                getCount();
            }
        }

        function getTotal() {
            // cartList.forEach(function(element) {
            //     total += (element.price * element.count);
            // })
            return $rootScope.total;
        }

        function getCount() {
            return count;

            // for (let i = 0; i < cartList.length; i++) {
            //     count += cartList[i].count;
            // }

            // if (count) {
            //     $rootScope.cartCount = count;
            // } else {
            //     $rootScope.cartCount = 0;
            // }

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

