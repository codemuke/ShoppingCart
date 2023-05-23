(function(){

    angular.module('ShoppingCart')
    .controller('cartPaymentController', cartPaymentController);

    cartPaymentController.$inject = ['ItemService'];
    
    function cartPaymentController(ItemService){        

        var cartPaymentC = this;
        //copying Item cart from service
        cartPaymentC.cartArray = ItemService.cart;
        console.log("cartPaymentC.cartArray ", cartPaymentC.cartArray);      

        
        //cartTotalPrice
        cartPaymentC.cartTotalPrice = function(){
            var total = 0;
            for(var i = 0; i <  cartPaymentC.cartArray.length; i++){
                //total += i.price;
                total += (cartPaymentC.cartArray[i].price * cartPaymentC.cartArray[i].quantity)
            }
            //cartPaymentC.total = total;
            console.log("TOTAL PRICE", total);
            return total;            
        }       
        
       cartPaymentC.cartAfterPay = function(){
        //empty the cart items after pay
        cartPaymentC.cartArray.length = 0;
        ItemService.cart.length = 0;   

       }

       //cart payment type button disable
    //    cartPaymentC.ButtonDisable = function(){
    //     //disable
    //     if((cartPaymentC.carddata.length < 16) ||(cartPaymentC.upidata ==="")){
    //         cartPaymentC.boolDisable = true;
    //     }
    //     //enable
    //     else if((cartPaymentC.carddata.length === 16) || (cartPaymentC.upidata !=="")){
    //         cartPaymentC.boolDisable = false;
    //     }
    
    //    }


    }

})();