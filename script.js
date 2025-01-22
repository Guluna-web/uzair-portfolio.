// You can add basic validation or animations here
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Simple validation
        if (username && password) {
            alert('Form submitted!');
        } else {
            alert('Please fill in all fields');
        }
    });
});
