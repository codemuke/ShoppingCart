(function(){

    angular.module('ShoppingCart')
    .service('UserService', UserService);

    UserService.$inject = ['$q']
    function UserService($q){
        var service = this;

        service.users =[
          {
            name:'abc',
            email:'abc@gmail.com',
            phone: 1234567890,
            password:'1234'
          },
          {
            name:'Velu',
            email:'velu@gmail.com',
            phone: 9865332394,
            password:'Velu@5874'
          },
          {
            name:'Manoj',
            email:'letthisworldlive@gmail.com',
            phone: 9597469846,
            password:'Manoj@1999',
          },
          {
            name:'Nolan',
            email:'chrisnolan@hollywood.com',
            phone: 7173608907,
            password: 'Maytheforcebewithyou'
          }
        ];

        service.updateUser = function(tempName, tempEmail, tempPhone, tempPassword){
          var newUser = {
            name: tempName,
            email: tempEmail,
            phone: tempPhone,
            password: tempPassword
          }
          service.users.push(newUser);
        }

        service.getUser = function(){
          var deferred = $q.defer();
          deferred.resolve(service.users);
          return deferred.promise;
        };

        service.getUserss = function(){
        return service.users;
        }            
            
    }

})();
