angular.module('store.controllers', ['ngResource', 'ngRoute'])

    .controller('HomeController', [function() {

    }])

    .controller('NavbarController', ['$scope', '$rootScope', '$location', 'CartService', function($scope, $rootScope, $location, CartService) {
        $scope.products = CartService.getCart();
        console.log($scope.products);
        
        $scope.checkout = function() {
            $location.url('/checkout');
            $scope.closeCartModal();
        }
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
            $scope.product.count = 1;
        })

        $scope.addToCart = function() {
            CartService.addItem($scope.product);
        }
    }])

    .controller('ContactController', ['$scope', 'Contact', function($scope, Contact) {
        $scope.send = function() {
            let contact = new Contact({
                fromEmail: $scope.email,
                subject: $scope.subject,
                message: $scope.message
            })

            console.log(contact);

            // contact.$save(function() {
            //     alert('Thank you for your message. I will respond shortly.')
            // }, function(err) {
            //     alert(err);
            // })
        }
    }])

    .controller('CheckoutController', ['$scope', 'Purchase', 'CartService', function($scope, Purchase, CartService) {
        // let elements = stripe.elements();
        // let card = elements.create('card');
        
        

        // card.mount('#card-field');

        $scope.products = CartService.getCart();


        $scope.purchase = {};
        $scope.total = CartService.getTotal();

        // $scope.process = function() {
        //     if ($scope.purchase.method === "cc") {


        //         stripe.createToken(card).then((result) => {
        //         if (result.error) {
        //             $scope.error = result.error.message;
        //         } else {
        //             let purchase = new Purchase({
        //                 token: result.token,
        //                 amount: $scope.purchase.total
        //             })
        //             purchase.$save();
        //             $scope.error = ''
        //         }
        //         });

        //         //create customer object for email receipt
        //         let message = ''
        //         let receipt = new Contact({
        //             toEmail: $scope.customer.email,
        //             //subject: `Receipt for Order ${placeholder}`
        //             //message: message
        //         })

        //         receipt.$get(function() {
        //             //nothing
        //         }, function(err) {
        //             alert(err);
        //         });

        //         receipt
        //     } else  {
        //         $scope.error = "Sorry, we do not accept PayPal at this time."
        //     }
        // }
        $scope.years = [];
        let now = new Date();
        for (let i = 0; i < 20; i++) {
            $scope.years.push(now.getFullYear() + i);
        };
        console.log($scope.years);

        $scope.states = [
            {
                name: "Alabama",
                abbreviation: "AL"
            },
            {
                name: "Alaska",
                abbreviation: "AK"
            },
            {
                name: "American Samoa",
                abbreviation: "AS"
            },
            {
                name: "Arizona",
                abbreviation: "AZ"
            },
            {
                name: "Arkansas",
                abbreviation: "AR"
            },
            {
                name: "California",
                abbreviation: "CA"
            },
            {
                name: "Colorado",
                abbreviation: "CO"
            },
            {
                name: "Connecticut",
                abbreviation: "CT"
            },
            {
                name: "Delaware",
                abbreviation: "DE"
            },
            {
                name: "District Of Columbia",
                abbreviation: "DC"
            },
            {
                name: "Federated States Of Micronesia",
                abbreviation: "FM"
            },
            {
                name: "Florida",
                abbreviation: "FL"
            },
            {
                name: "Georgia",
                abbreviation: "GA"
            },
            {
                name: "Guam",
                abbreviation: "GU"
            },
            {
                name: "Hawaii",
                abbreviation: "HI"
            },
            {
                name: "Idaho",
                abbreviation: "ID"
            },
            {
                name: "Illinois",
                abbreviation: "IL"
            },
            {
                name: "Indiana",
                abbreviation: "IN"
            },
            {
                name: "Iowa",
                abbreviation: "IA"
            },
            {
                name: "Kansas",
                abbreviation: "KS"
            },
            {
                name: "Kentucky",
                abbreviation: "KY"
            },
            {
                name: "Louisiana",
                abbreviation: "LA"
            },
            {
                name: "Maine",
                abbreviation: "ME"
            },
            {
                name: "Marshall Islands",
                abbreviation: "MH"
            },
            {
                name: "Maryland",
                abbreviation: "MD"
            },
            {
                name: "Massachusetts",
                abbreviation: "MA"
            },
            {
                name: "Michigan",
                abbreviation: "MI"
            },
            {
                name: "Minnesota",
                abbreviation: "MN"
            },
            {
                name: "Mississippi",
                abbreviation: "MS"
            },
            {
                name: "Missouri",
                abbreviation: "MO"
            },
            {
                name: "Montana",
                abbreviation: "MT"
            },
            {
                name: "Nebraska",
                abbreviation: "NE"
            },
            {
                name: "Nevada",
                abbreviation: "NV"
            },
            {
                name: "New Hampshire",
                abbreviation: "NH"
            },
            {
                name: "New Jersey",
                abbreviation: "NJ"
            },
            {
                name: "New Mexico",
                abbreviation: "NM"
            },
            {
                name: "New York",
                abbreviation: "NY"
            },
            {
                name: "North Carolina",
                abbreviation: "NC"
            },
            {
                name: "North Dakota",
                abbreviation: "ND"
            },
            {
                name: "Northern Mariana Islands",
                abbreviation: "MP"
            },
            {
                name: "Ohio",
                abbreviation: "OH"
            },
            {
                name: "Oklahoma",
                abbreviation: "OK"
            },
            {
                name: "Oregon",
                abbreviation: "OR"
            },
            {
                name: "Palau",
                abbreviation: "PW"
            },
            {
                name: "Pennsylvania",
                abbreviation: "PA"
            },
            {
                name: "Puerto Rico",
                abbreviation: "PR"
            },
            {
                name: "Rhode Island",
                abbreviation: "RI"
            },
            {
                name: "South Carolina",
                abbreviation: "SC"
            },
            {
                name: "South Dakota",
                abbreviation: "SD"
            },
            {
                name: "Tennessee",
                abbreviation: "TN"
            },
            {
                name: "Texas",
                abbreviation: "TX"
            },
            {
                name: "Utah",
                abbreviation: "UT"
            },
            {
                name: "Vermont",
                abbreviation: "VT"
            },
            {
                name: "Virgin Islands",
                abbreviation: "VI"
            },
            {
                name: "Virginia",
                abbreviation: "VA"
            },
            {
                name: "Washington",
                abbreviation: "WA"
            },
            {
                name: "West Virginia",
                abbreviation: "WV"
            },
            {
                name: "Wisconsin",
                abbreviation: "WI"
            },
            {
                name: "Wyoming",
                abbreviation: "WY"
            },
            {
                name: "Alberta",
                abbreviation: "AB"
            },
            {
                name: "British Columbia",
                abbreviation: "BC"
            },
            {
                name: "Manitoba",
                abbreviation: "MB"
            },
            {
                name: "New Brunswick",
                abbreviation: "NB"
            },
            {
                name: "Newfoundland and Labrador",
                abbreviation: "NL"
            },
            {
                name: "Nova Scotia",
                abbreviation: "NS"
            },
            {
                name: "Northwest Territories",
                abbreviation: "NT"
            },
            {
                name: "Nunavut",
                abbreviation: "NU"
            },
            {
                name: "Ontario",
                abbreviation: "ON"
            },
            {
                name: "Prince Edward Island",
                abbreviation: "PE"
            },
            {
                name: "Quebec",
                abbreviation: "QB"
            },
            {
                name: "Saskatchewan",
                abbreviation: "SK"
            },
            {
                name: "Yukon",
                abbreviation: "YT"
            }
        ];

    }])