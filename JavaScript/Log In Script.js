function Login(){
    var username = document.getElementById ("username").value;
    var accpassword = document.getElementById ("accpassword").value;

    var regEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
    var regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;

    var email_error = document.getElementById("email_error")
    var password_error = document.getElementById("password_error")


    if (username == "" || !regEmail.test(username)) {
        email_error.textContent = "Your email address is invalid."
        document.getElementById("username").style.backgroundColor= "#FBE3E4"; 
        document.getElementById("username").style.border= "2px solid #FF0000"; 
        return false;
    }

    if (accpassword == "" || !regPassword.test(accpassword)) {
        password_error.textContent = "Your password is incorrect." 
        document.getElementById("accpassword").style.backgroundColor= "#FBE3E4"; 
        document.getElementById("accpassword").style.border="2px solid #FF0000";
        return false;
    }   

    alert ("You have successfully logged in!");
    return true;
}

function Visible (){   
    if (accpassword.type === "password") {
        accpassword.type = "text";
    } else {
        accpassword.type = "password";
    } 
}   
