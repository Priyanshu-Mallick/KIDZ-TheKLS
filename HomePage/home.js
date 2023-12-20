// home.js
// This file can be left empty for now if no JavaScript functionality is needed for the home page.
// home.js

// Function to redirect to the login page
function redirectToLogin() {
    window.location.href = '/LogInSignUp Page/login.html';
}

// Function to redirect to the sign-up page
function redirectToSignUp() {
    window.location.href = '/LogInSignUp Page/signup.html';
}

// Event listeners for the buttons
document.getElementById('LoginBtn').addEventListener('click', redirectToLogin);
document.getElementById('signUpBtn').addEventListener('click', redirectToSignUp);
