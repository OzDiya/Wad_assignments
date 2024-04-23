function showLoginForm() {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

function showRegisterForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}

function validateRegistration() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var password = document.getElementById('password').value;

    if (!email.includes('@') || !email.includes('.com')) {
        alert('Invalid email address');
        return;
    }

    if (mobile.length !== 10 || isNaN(mobile)) {
        alert('Invalid mobile number');
        return;
    }

    if (password.length < 8) {
        alert('Password should be at least 8 characters long');
        return;
    }

    alert('Registration successful!\nWelcome, ' + name + '!');
}

function validateLogin() {
    var loginEmail = document.getElementById('loginEmail').value;
    var loginPassword = document.getElementById('loginPassword').value;

    alert('Login successful!');
}
