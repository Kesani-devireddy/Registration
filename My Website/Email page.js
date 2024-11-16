            email = document.querySelector(".js-email");
            password = document.querySelector(".js-password");
            emailWarning = document.querySelector(".js-email-warning-msg");
            passwordWarning = document.querySelector(".js-password-warning-msg");
            UserName = document.querySelector(".js-User-Name");
            UserNameWarning = document.querySelector(".js-User-name-warning-msg");

            document.querySelector(".js-logedin").addEventListener('click' , () => {
                if(UserName.value === ""){
                    UserNameWarning.innerHTML = 'Enter the User Name' ;
                }

                if(email.value === "" ){
                    emailWarning.innerHTML = 'Enter the Email' ;   
                }

                if(password.value === ""){
                    passwordWarning.innerHTML = 'Enter the password' ;
                }
                    
                
                if(email.value !== "" && password.value !== "" && UserName.value !== ""){
                    alert(`Hello ${UserName.value}. You successfully Logged In`);
                }
                


                
            });