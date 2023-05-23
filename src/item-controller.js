(function(){

    angular.module('ShoppingCart')
    .controller('ItemController', ItemController);

    ItemController.$inject = ['ItemService'];
    
    function ItemController(ItemService){

        var ItemC = this;

        ItemC.ItemsObject = ItemService.getItemss();
        console.log(" ItemService.getItemss() ", ItemService.getItemss());
        
        ItemC.cart =[];
        ItemC.cartQuantityVariable = 0;
        
        
        //when the items keeps updating this function works
        ItemC.cartItems = function(tempName, tempPrice, tempQuantity, tempSrc){
            console.log("items.cart before push", ItemC.cart);          


            var hasItemExist = ItemC.cart.some( item => item['name'] === tempName);
            console.log("hasItemExist", hasItemExist);
            
            // if item does not exists means push the item in the cart
            if(!hasItemExist){
                ItemC.cart.push(
                    {   name : tempName,
                        price: tempPrice, 
                        quantity: tempQuantity,
                        imgsrc: tempSrc,
                    } 
                ); 
            }
            else if(hasItemExist){ // item exists means update the quantity
                for(let i=0; i < ItemC.cart.length; i++){  
                    if (ItemC.cart[i].name === tempName){ 
                        ItemC.cart[i].quantity +=1;
                    }
                   
                }
            }                  
            
            ItemC.cartQuantity = function(){
                var total = 0;
                for(var i=0; i < ItemC.cart.length; i++){  
                    total += ItemC.cart[i].quantity;                 
                }
                console.log("addQuantity ItemC.cartQuantityVariable", ItemC.cartQuantityVariable);
                return total;
            }

            ItemC.cartQuantityVariable =  ItemC.cartQuantity(); 

            console.log("tempName "+tempName+" tempPrice "+ tempPrice+" tempQuantity "+tempQuantity );
            console.log("ItemC.cart", ItemC.cart);
            //updating ItemC.cart in service
            ItemService.updateCart(ItemC.cart);            
            
        }        
    }

})();

