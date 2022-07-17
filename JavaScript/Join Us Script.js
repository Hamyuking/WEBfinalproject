function SignUp(){
    var name = document.getElementById ("name").value;
    var email = document.getElementById ("email").value;
    var phone = document.getElementById ("phone").value;
    var password = document.getElementById ("password").value;
    
    var regEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var regPhone= /^\d{10}$/;   
    var regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
    
    var invalid_email = document.getElementById("invalid_email");
    var invalid_phone = document.getElementById("invalid_phone");
    var invalid_password = document.getElementById("invalid_password");

    if (email == "" || !regEmail.test(email)) {
        invalid_email.textContent = "Please enter a valid email address.";
        document.getElementById("email").style.backgroundColor= "#FBE3E4"; 
        document.getElementById("email").style.border= "2px solid #FF0000"; 
        return false;
    } 

    if (phone == "" || !regPhone.test(phone)) {
        invalid_phone.textContent = "Please enter a phone number of 10 digits only.";
        document.getElementById("phone").style.backgroundColor= "#FBE3E4"; 
        document.getElementById("phone").style.border= "2px solid #FF0000"; 
        return false;
    }   

    if (password == "" || !regPassword.test(password)) {
        invalid_password.textContent = "Please create a password with the format above.";
        document.getElementById("password").style.backgroundColor= "#FBE3E4"; 
        document.getElementById("password").style.border= "2px solid #FF0000"; 
        return false;
    }   

    alert ("Congrats! You are one of us now.")
    return true;   
}