(function(){

    angular.module('ShoppingCart')
    .controller('SignInController', SignInController);

    SignInController.$inject =['UserService', '$state']
    function SignInController(UserService, $state){
     var SignInC = this;

     SignInC.name="";
     SignInC.email ="";
     SignInC.phone="";
     SignInC.password="";
    
     SignInC.onChangeInputSignIn = function(){
        console.log("user typed email", SignInC.email);
        SignInC.getUser();
     }

     SignInC.getUser = function(){
        if(!(SignInC.email)){
            SignInC.found = null;
            return;
        }    

        SignInC.found = [];
        var promise = UserService.getUser(SignInC.name, SignInC.email, SignInC.phone, SignInC.password);
        
        promise.then(function (response){
            console.log("After Promise Response", response);
            SignInC.found = response; //storing the response in the array
            
            //iterating the found response array and checking the email exists?
            for(var i = 0; i < SignInC.found.length; i++){
                console.log("SignInC.found.length", SignInC.found.length);
                if((SignInC.found[i].email === SignInC.email) && (SignInC.found[i].password === SignInC.password) ){  
                    SignInC.signInBool = true;
                    $state.go("ItemsHome");
                    //SignInC.BoolUserExists = true; 
                    console.log("User Exists and signed in");                 
                    console.log("SignInC.found[i]", SignInC.found[i]); 
                    SignInC.SignInMessage ="You have succesfully Signed In";     
                    break;
                }  
                if(!SignInC.signInBool){
                    SignInC.SignInMessage ="User doesn't exist!!! Kindly Sign Up";        
                  }
                // else if((SignInC.found[i].email !== SignInC.email) && (SignInC.found[i].password !== SignInC.password)) {
                //     SignInC.signInBool = false;         
                //     SignInC.SignInMessage ="User doesn't exist!!! Kindly Sign Up";           
                //     console.log("User doesn't exists!!");
                //     break;
                // }
            }
        })
        .catch(function (error){             
            console.log("Something went wrong", error);    
        });

     }

    }   

})();
