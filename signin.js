function socialLogin(platform) {
    alert(`Logging in with ${platform}`);
}

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Login form submitted');
});
