
const loginBtn= document.querySelector("#login-btn")

function validateForm(){
    const email = document.querySelector("#emailInput").value.trim();
    const password = document.querySelector("#passInput").value;
    const emailError = document.querySelector("#email-error");
    const passError = document.querySelector("#password-error");

    let validForm = true;

    if(email === ""){
        emailError.innerHTML = "Enter your email address";
        validForm = false;
    }else if (email.length < 10){
        emailError.innerHTML = "email address must be at least 10 characters long";
        validForm = false;
    } else{
        emailError.innerHTML = "";
    }

    if (password === ""){
        passError.innerHTML = "Enter your password";
        validForm = false;
    }else if (password.length < 6 || !/[A-Z]/.test(password) || !/[!@#$%^&*]/.test(password)){
        passError.innerHTML = "password required min 6 caracters and include one capital letter and one special character";
        validForm = false;
    }else {
        passError.innerHTML = "";
    }

    if (validForm) {
        window.href = "index.html"; // Replace with your desired page
    }

    return validForm;
}

