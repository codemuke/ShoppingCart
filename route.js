(function(){
    
    'use strict',
    angular.module('ShoppingCart')
    .config(RoutesConfig)

    RoutesConfig.$inject =['$stateProvider', '$urlRouterProvider']
    function RoutesConfig($stateProvider, $urlRouterProvider){

    //default page if no other url matches
    $urlRouterProvider.otherwise('/');

    //Setting up UI States
    $stateProvider
    
    //Home Page
    .state('home', {
        url: '/',
        templateUrl: 'src/templates/home-initial-sign.html',
    })

    //SignUp Page
    .state('SignUp', {
        url:'/sign-up',
        templateUrl: 'src/templates/signup-page.html',
        controller: "SignUpController as SignUpC",
    })

    //SignIn Page
    .state('SignIn' , {
        url:'/user-SignIn',
        templateUrl: 'src/templates/signin-page.html',
        controller: "SignInController as SignInC",
    })

    //Items Home
    .state('ItemsHome', {
        url:'/items-home',
        templateUrl: 'src/templates/items-home.html',
        controller: 'ItemController as ItemC',
    })

    //Separate Item View
    // .state('ItemView', {
    //     url:'/item-view',
    //     templateUrl: 'src/templates/item-separate-view.html',
    //     controller: 'ItemController as ItemC',
    // })
    //Cart Payment Page after Clicking Cart Icon
    .state('CartPayment', {
        url:'/cart-payment',
        templateUrl: 'src/templates/cart-payment-page.html',
        controller: 'cartPaymentController as cartPaymentC',
    })

    //Payment type Page 
    .state('CartPaymentType', {
        url:'/cart-payment-type',
        templateUrl: 'src/templates/cart-payment-type.html',
        controller: 'cartPaymentController as cartPaymentC',
    })

    //Payment Gateway
    .state('PaymentGateway', {
        url:'/payment-gateway',
        templateUrl: 'src/templates/payment-gateway.html',
        controller: 'cartPaymentController as cartPaymentC',
    })

    .state('cartPageUpdate',{
        url:'/cart-page-update',
        templateUrl: 'src/templates/cartpage-after-payment.html',
        controller:  'cartPaymentController as cartPaymentC',
    }
    )

    }


})();