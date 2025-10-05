document.addEventListener("DOMContentLoaded", function () {
    // Form Selection
    const form = document.getElementById("registration-form");
    
    // Feedback Division Selection  
    const feedbackDiv = document.getElementById("form-feedback");

    // Form Submission Event Listener
    form.addEventListener("submit", (event) => {
        // Prevent form submission
        event.preventDefault();

        // Retrieve User Inputs and Trimming
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Initialize Validation Variables
        let isValid = true;
        const messages = [];

        // Username Validation
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Email Validation
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        // Password Validation
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Feedback Display Logic
        // Make feedbackDiv visible
        feedbackDiv.style.display = "block";

        if (isValid) {
            // If validation passes
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
        } else {
            // If validation fails
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
        }
    });
});
