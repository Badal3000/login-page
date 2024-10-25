const form = document.getElementById('sign-up');
const contentContainer = document.querySelector(".container"); // Updated to match the HTML structure

const usernameInput = document.getElementById("username-input");
const usernameError = document.querySelector("#username-error");

const emailInput = document.getElementById("email-input");
const emailError = document.querySelector("#email-error");

const passwordInput = document.getElementById("password-input");
const passwordError = document.querySelector("#password-error");

const confirmPassInput = document.getElementById("confirm-password-input");
const confirmPassError = document.querySelector("#confirm-password-error");

const alphanumericPattern = /^[A-Za-z0-9]+$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\W)(?!.*\s).+$/;


function handleSubmit(event) {
    event.preventDefault(); 

   
    usernameError.innerText = "";
    emailError.innerText = "";
    passwordError.innerText = "";
    confirmPassError.innerText = "";

    if (usernameInput.value.length === 0) {
        usernameError.innerText = "Username is required";
    } else if (usernameInput.value.length < 8) {
        usernameError.innerText = "Username should be at least 8 characters long.";
    } else if (!alphanumericPattern.test(usernameInput.value)) {
        usernameError.innerText = "Username must be alphanumeric.";
    }

    
    if (emailInput.value.length === 0) {
        emailError.innerText = "Email is required";
    } else if (!emailPattern.test(emailInput.value)) {
        emailError.innerText = "Please enter a valid email address.";
    }

    if (passwordInput.value.length === 0) {
        passwordError.innerText = "Password is required";
    } else if (passwordInput.value.length < 8 || passwordInput.value.length > 24) {
        passwordError.innerText = "Password should have a length between 8 to 24 characters.";
    } else if (!passwordPattern.test(passwordInput.value)) {
        passwordError.innerText = "Password must contain at least one uppercase letter, one lowercase letter, and one special character.";
    } else if (!alphanumericPattern.test(passwordInput.value)) {
        passwordError.innerText = "Password must be alphanumeric.";
    }

   
    if (confirmPassInput.value.length === 0) {
        confirmPassError.innerText = "Confirm Password is required";
    } else if (passwordInput.value !== confirmPassInput.value) {
        confirmPassError.innerText = "Confirm Password must match Password";
    }

 
    if (!usernameError.innerText && !emailError.innerText && !passwordError.innerText && !confirmPassError.innerText) {
        console.log("Form is Submitted!");
        console.log("Username:", usernameInput.value, "\nEmail:", emailInput.value, "\nPassword:", passwordInput.value, "\nConfirm Password:", confirmPassInput.value);
        contentContainer.innerText = `Username: ${usernameInput.value},\nEmail: ${emailInput.value},\nPassword: ${passwordInput.value},\nConfirm Password: ${confirmPassInput.value}`;
    }
}


form.addEventListener('submit', handleSubmit);