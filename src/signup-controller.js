(function(){

    angular.module('ShoppingCart')
    .controller('SignUpController', SignUpController);

    SignUpController.$inject =['UserService']
    function SignUpController(UserService){
     var SignUpC = this;

     SignUpC.name="";
     SignUpC.email ="";
     SignUpC.phone="";
     SignUpC.password="";    

     SignUpC.onSubmitSignUp = function(){    
        //for Signup Button            
        if(SignUpC.BoolNewUser){ 
        console.log(SignUpC.NewUserSignUp);
        SignUpC.Message = "You have succesfully Signed Up";
        }      
     }

     SignUpC.onChangeInputSignup = function(){
        console.log("user typed email", SignUpC.email);
        SignUpC.getUser();
     }

     SignUpC.getUser = function(){
        if(!(SignUpC.email)){
            SignUpC.found = null;
            return;
        }    

        SignUpC.found = [];
        var promise = UserService.getUser(SignUpC.name, SignUpC.email, SignUpC.phone, SignUpC.password);
        
        promise.then(function (response){
            console.log("After Promise Response", response);
            SignUpC.found = response; //storing the response in the array
            
            //iterating the found response array and checking the email exists?
            for(var i = 0; i < SignUpC.found.length; i++){
                if(SignUpC.found[i].email === SignUpC.email){
                    SignUpC.BoolUserExists = "User Already Exists.. Kindly signIn";
                    console.log("SignUpC.found[i]", SignUpC.found[i]);
                    console.log("User Already Exists.. Kindly signIn");
                    break;
                }
                else{
                    UserService.updateUser(SignUpC.name, SignUpC.email, SignUpC.phone, SignUpC.password);
                    // SignUpC.name = "";
                    // SignUpC.email = "";
                    // SignUpC.phone = "";
                    // SignUpC.password = "";
                    SignUpC.NewUserSignUp = "new user info is succesfully signed up!"
                    SignUpC.BoolNewUser = true;
                    console.log("new user info is stored!");
                    break;
                }
            }
        })
        .catch(function (error){
            console.log("Something went wrong", error);    
        });


     }

    }   

})();
