let form = document.getElementById("form1");
let formBtn = document.getElementById("btn");

let nameSurname = document.getElementById("nameSurName");
let password = document.getElementById("pname");
let confirmPassword = document.getElementById("cpname");
let email = document.getElementById("ename");
let confirmEmail = document.getElementById("cename");

let nameError = document.getElementById("name-error");
let emailError = document.getElementById("email-error");
let confirmEmailError = document.getElementById("cemail-error");
let passError = document.getElementById("pass-error");
let confirmPassError = document.getElementById("cpass-error");

form.addEventListener("submit", (event) => validateForm(event));

const validateForm = (event) => {
  event.preventDefault();

  if (nameSurname.value === "") {
    nameError.innerHTML = "Name and Surname are required!";
    nameSurname.style.border = "2px solid red";
  } else {
    nameError.innerHTML = "";
    nameSurname.style.border = "2px solid green";
  }

  if (email.value === "") {
    emailError.innerHTML = "Email is required!";
    email.style.border = "2px solid red";
  } else if (email.value.length < 9) {
    emailError.innerHTML = "Email is not valid!";
    email.style.border = "2px solid red";
  } else {
    email.style.border = "2px solid green";
    emailError.innerHTML = "";
  }

  if (confirmEmail.value === "") {
    confirmEmailError.innerHTML = "Please confirm email!";
    confirmEmail.style.border = "2px solid red";
  } else if (confirmEmail.value !== email.value) {
    confirmEmailError.innerHTML = "Emails don't match";
    confirmEmail.style.border = "2px solid red";
  } else {
    confirmEmail.style.border = "2px solid green";
    confirmEmailError.innerHTML = "";
  }

  if (password.value === "") {
    passError.innerHTML = "Password is required!";
    password.style.border = "2px solid red";
  } else if (password.value.length < 8) {
    passError.innerHTML = "Password should be atleast 8 characters long!";
    password.style.border = "2px solid red";
  } else {
    password.style.border = "2px solid green";
    passError.innerHTML = "";
  }

  if (confirmPassword.value === "") {
    confirmPassError.innerHTML = "Please confirm password!";
    confirmPassword.style.border = "2px solid red";
  } else if (confirmPassword.value !== password.value) {
    confirmPassError.innerHTML = "Passwords don't match";
    confirmPassword.style.border = "2px solid red";
  } else {
    confirmPassword.style.border = "2px solid green";
    confirmPassError.innerHTML = "";
  }
};

let openBtn = document.querySelector(".open-modal");
let closeBtn = document.querySelector(".close-modal");
let modal = document.querySelector(".form-container");

openBtn.addEventListener("click", () => {
  modal.style.display = "inline";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

formBtn.addEventListener("click", () => {
  console.log("----------");
  console.log(email.value, "email");
  console.log(password.value, "password");
  console.log(nameSurname.value, "ime prezime");
  console.log(confirmEmail.value, "potvrdi email");
  console.log(confirmPassword.value, "potvrdi sifru");
  if (
    nameSurname.value !== "" &&
    email.value.length > 8 &&
    confirmEmail.value === email.value &&
    password.value.length > 7 &&
    confirmPassword.value === password.value
  ) {
    alert("Succesful Sign Up!");
  }
});
