(function(){
    
    angular.module('ShoppingCart')
    .service('ItemService', ItemService);

    ItemService.$inject = ['$q'];
    function ItemService($q){
        console.log("service got injected!!")
        var service = this;
        service.cart = [];
        service.items = [
            {
                id:1,
                imgsrc:"https://lh3.googleusercontent.com/jnZRsyKMgqIyL8ZkVS2mBTNZ-ivbOy0KmigHrH2oro5CjvJvUkwEFheGlVovmBNeQ89qt2cfI1fM2wkXmt5zrEyZgRbfhe58bg=w483",
                name:'Google Pixel 7a',
                price:43999,
                quantity:1
            },
            {
                id:2,
                imgsrc:"https://lh3.googleusercontent.com/SjFYOoOjF40cw-fUdKddJ2RYv9MouDWx57Lnzmu3P3WYYky6x8oYT_cG78DzxyrVfN1Xt1h4Qg1JNUCrS8mfU3nqYzzQhpj8EA=w483",
                name:'Google Pixel 7 Pro',
                price:80999,
                quantity:1
            },
            {
                id:3,
                imgsrc:"https://lh3.googleusercontent.com/FPWTyvU_cUWo-XA1kH2RQtqJZZ3ue5RdH73LFxWKaSinhyZHl3Wsn5LCtCca-5RDd-VH7W6REr-hjaFfMIeSQjjfaAustGljtlE=w483",
                name:'Google Pixel 6a',
                price: 50000,
                quantity:1
            },
            {
                id:4,
                imgsrc: "https://m.media-amazon.com/images/I/61XO4bORHUL._SL1500_.jpg",
                name:'iphone 14Pro',
                price: 119999,
                quantity:1
            },
            {
                id:5,
                imgsrc: "https://m.media-amazon.com/images/I/71X6mnUDSzL._SL1500_.jpg",
                name:'iphone 13',
                price: 61999,
                quantity:1
            },
            {
                id:6,
                imgsrc:"https://www.apple.com/v/macbook-air/o/images/overview/trade_in__gh5aoaws28mm_large.jpg",
                name:'MacBookAir',
                price: 112990,
                quantity:1
            },
            {
                id:7,
                imgsrc:"https://www.apple.com/v/macbook-pro-13/p/images/overview/compare/compare_mbp_13__givmvd62t5ua_large.png",
                name:'MacBookPro 13 inch',
                price: 200000,
                quantity:1
            },
            {
                id:8,
                imgsrc:"https://www.apple.com/v/macbook-air/o/images/overview/hero_mba_m2__ejbs627dj7ee_large.jpg",
                name:'MacBookAir M2 Chip',
                price: 106990,
                quantity:1
            },
            {
                id:9,
                imgsrc:"https://www.apple.com/v/macbook-pro-14-and-16/e/images/overview/compare/compare_mbp_13__e5kpzyu3ocae_large.png",
                name:'MacBookPro M2 Chip',
                price: 135990,
                quantity:1
            },
            {
                id:10,
                imgsrc:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp16-spacegray-select-202301?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1671304673202",
                name:'MacBookPro M2 Chip 16 inch',
                price: 269900,
                quantity:1
            },
            {
                id:11,
                imgsrc:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-pro-2019-gallery2?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1572644161517",
                name:'Mac Pro 3.5GHz 8-core Processor ',
                price: 499900,
                quantity:1
            },
            {
                id:12,
                imgsrc:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/imac-24-blue-selection-hero-202104?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1617492405000",
                name:'iMac',
                price: 129900,
                quantity:1
            }
        ];      

        service.getItemss = function(){
            return service.items;
        }
        //from controller update the cart in the service
        //ItemC.cart =[];
        
        service.updateCart = function(cartItems){
            service.cart = cartItems;
            console.log("service.cart", service.cart);
            return service.cart;
        }
        console.log("service.cart outside service function", service.cart);
    }

})();