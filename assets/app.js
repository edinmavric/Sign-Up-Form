let password = document.getElementById('pname');
let confirmPassword = document.getElementById('cpname');
let email = document.getElementById('ename');
let confirmEmail = document.getElementById('cename');
let nameAndSurname = document.getElementById('nameSurName');

function validateForm() {

    if (email.value.length < 9) {
        alert('Email must be entered!');
        return false;
    }
    if (email.value.length != confirmEmail.value.length) {
        alert('Confirm same email or use another one!');
        return false;
    }
    if (password.value.length < 8) {
        alert('Password must be atleast 8 characters long!');
        return false;
    }
    if (password.value.length == confirmPassword.value.length) {
        prompt("Succesfull Sing up!", "Enter your username");
        return true;
    }
    if (password.value.length != confirmPassword.value.length) {
        alert("Passwords don't match!");
        return false;
    }

}

// kad je tacan input je zelen kad nije onda je crven
// ako je netacan da pise ispod inputa umesto alerta