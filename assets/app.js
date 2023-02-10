let forma = document.getElementById('form1');
let button = document.getElementById('btn');

let password = document.getElementById('pname');
let confirmPassword = document.getElementById('cpname');
let email = document.getElementById('ename');
let confirmEmail = document.getElementById('cename');

let emailError = document.getElementById('email-error');
let confirmEmailError = document.getElementById('cemail-error');
let passError = document.getElementById('pass-error');
let confirmPassError = document.getElementById('cpass-error');


const validateForm = () => {

    greenValidateForm();
    
    if (email.value.length < 9) {
        emailError.innerHTML = 'Email is incorrect!'
        email.style.border = '1px solid red'
        return false;
    } 
    
    if (email.value.length != confirmEmail.value.length) {
        confirmEmailError.innerHTML = 'Use same Email info!'
        confirmEmail.style.border = '1px solid red'
        return false;
    } 
    
    if (password.value.length < 8) {
        passError.innerHTML = 'Password must contain 8 characters!'
        password.style.border = "1px solid red";
        return false;
    } 
    
    if (password.value.length == confirmPassword.value.length) {
        prompt("Succesfull Sing up!", "Enter your username");
        return true;
    }
    
    if (password.value.length != confirmPassword.value.length) {
        confirmPassError.innerHTML = "Passwords doesn't match!";
        confirmPassword.style.border = "1px solid red";
        return false;
    }
}

const greenValidateForm = () => {

    if (email.value.length >= 9) {
        emailError.innerHTML = 'Email is correct!'
        email.style.border = '1px solid green'
        return true;
    } 
    
    if (email.value.length == confirmEmail.value.length) {
        confirmEmailError.innerHTML = 'Email info matches!'
        confirmEmail.style.border = '1px solid green'
        return true;
    } 

    if (password.value.length >= 8) {
        passError.innerHTML = 'Password can be used!'
        password.style.border = "1px solid green";
        return true;
    } 

    if (password.value.length == confirmPassword.value.length) {
        confirmPassError.innerHTML = "Passwords match!";
        confirmPassword.style.border = "1px solid green";
        return true;
    }

}

// button.addEventListener('submit', validateForm);