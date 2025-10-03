document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form')
    const feedbackDiv = document.getElementById('form-feedback')

    form.addEventListener('submit', (event) => {
        event.preventDefault()

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        let isValid = true;
        const message = [];

        if(username.length < 4) {
            isValid = false;
            message.push('Your username must have 4 or more characters')
        }

        if(!email.includes('@') || !email.includes('.')) {
            isValid = false;
            message.push("email must have '@' and '.'")
        }

        if(password.length < 8) {
            isValid = false;
            message.push('password must be at least 8 characters')
        }

        feedbackDiv.style.display = 'block'

        if(isValid) {
            feedbackDiv.innerHTML = 'Registration successful'
            feedbackDiv.style.backgroundColor = "#28a745"
        } else {
            feedbackDiv.innerHTML = message.join("<br>")
            feedbackDiv.style.color = "#dc3545";
        }
    })

})