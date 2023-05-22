// JavaScript code for the casino login page
const loginForm = document.getElementById('loginForm');
const createAccountForm = document.getElementById('createAccountForm');
const toggleForm = document.getElementById('toggleForm');
const errorText = document.getElementById('errorText');
const createErrorText = document.getElementById('createErrorText');

toggleForm.addEventListener('click', () => {
    loginForm.classList.toggle('create-account');
    createAccountForm.classList.toggle('create-account');
    errorText.textContent = '';
    createErrorText.textContent = '';
});

const login = document.getElementById('login');
login.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'password') {
        // Redirect to the casino dashboard or do any other necessary actions upon successful login
        window.location.href = 'dashboard.html';
    } else {
        errorText.textContent = 'Invalid username or password. Please try again.';
    }
});

const createAccount = document.getElementById('createAccount');
createAccount.addEventListener('submit', (event) => {
    event.preventDefault();

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    if (newUsername !== '' && newPassword !== '') {
        // Perform account creation logic here
        // For simplicity, this example doesn't handle actual account creation
        // Instead, it simply shows a success message
        createErrorText.textContent = 'Account created successfully!';
        createErrorText.style.color = '#00ff00';
    } else {
        createErrorText.textContent = 'Please provide a username and password.';
        createErrorText.style.color = '#ff0000';
    }
});