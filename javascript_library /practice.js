// script.js
function handleLogin(event) {
    event.preventDefault();

    // Get the username and password from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Sample login credentials for demonstration
    const validUsername = 'user123';
    const validPassword = 'password123';

    // Validate login
    if (username === validUsername && password === validPassword) {
        // Hide the login form and show the personal info
        document.querySelector('.login-container').style.display = 'none';
        document.getElementById('personalInfoContainer').classList.remove('hidden');

        // Fill the personal information in the table
        document.getElementById('fullName').textContent = 'John Doe';
        document.getElementById('email').textContent = 'johndoe@example.com';
        document.getElementById('phoneNumber').textContent = '123-456-7890';
        document.getElementById('address').textContent = '123 Main St, City, Country';
    } else {
        alert('Invalid username or password!');
    }
}