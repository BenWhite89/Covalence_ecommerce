angular.module('store.factories', ['ngResource'])

    .factory('Category', ['$resource', function($resource) {
        return $resource('/api/categories', {}, {});
    }])

    .factory('Contact', ['$resource', function($resource) {
        return $resource('/api/contact', {}, {});
    }])

    .factory('Product', ['$resource', function($resource) {
        return $resource('/api/products/:id', { id: '@id' }, {});
    }])

    .factory('Purchase', ['$resource', function($resource) {
        return $resource('/api/purchases/', {}, {});
    }])
