(function () {
    var form = document.getElementById('registration');
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    var cpassword = document.getElementById('cpassword');
    var country = document.getElementById('country');
    var agree = document.getElementById('agree');
    var submit = document.getElementById('submit');
  
    var usernameValidate = false;
    var passwordValidate = false;
    var countryValidate = false;                         
    var agreeValidate = false;
    submit.disabled = true;                        
    submit.className = 'disabled';                 
    
    function validate() {
        if(!usernameValidate || !passwordValidate || !countryValidate || !agreeValidate){
            submit.disabled =  true;
            submit.className = 'disabled';
        }else{
            submit.disabled =  false;
            submit.className = 'enabled';
        }
    }

    addEvent(username, 'input', function (e) {
        if(e.target.value){
            usernameValidate = true;  
        }else{
            usernameValidate = false;
        }
        validate();    
      });

    addEvent(password, 'input', function (e) {
        if(e.target.value && e.target.value.length >= 10){
            if(cpassword.value == e.target.value){
                passwordValidate = true;
            }else{
                passwordValidate = false;
            }
        }else{
            passwordValidate = false;
        }
        validate();
    });

    addEvent(cpassword, 'input', function (e) {
        if(e.target.value && e.target.value.length >= 10){
            if(password.value == e.target.value){
                passwordValidate = true;
            }else{
                passwordValidate = false;
            }
        }else{
            passwordValidate = false;
        }
        validate();
    });

    addEvent(country, 'change', function (e) {
        if(e.target.value){
            countryValidate = true;
        }else{
            countryValidate = false;
        }
        validate();
    });

    addEvent(agree, 'change', function (e) {
        if(e.target.value){
            agreeValidate = true;
        }else{
            agreeValidate = false;
        }
        validate();
    });
  
    addEvent(form, 'submit', function (e) {             
      
      if (submit.disabled || submit.className == "disabled") {       
        e.preventDefault();          
        return;                      
      }                              
  
      submit.disabled = true;        
      submit.className = 'disabled'; 
  
      e.preventDefault();
      var name = username.value; 
      var countryName = country.value;         
      var msg = 'Welcome ' + name + '! The country code you selected is ' + countryName;       
      document.getElementById('main').textContent = msg; 
    });
  }());