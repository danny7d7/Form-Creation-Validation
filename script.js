document.addEventListener("DOMContentLoaded", () => {
  // Grab form and feedback div
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent page reload

    // Grab and trim inputs
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let isValid = true;
    const messages = [];

    // Username validation (adjust length if needed)
    if (username.length < 3) { // Change this if checklist specifies different length
      isValid = false;
      messages.push("Username must be at least 3 characters long.");
    }

    // Email validation
    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push("Please enter a valid email address.");
    }

    // Password validation
    if (password.length < 8) {
      isValid = false;
      messages.push("Password must be at least 8 characters long.");
    }

    // Make feedbackDiv visible
    feedbackDiv.style.display = "block";

    // Show feedback - EXACTLY as per checklist
    if (isValid) {
      feedbackDiv.textContent = "Registration successful"; // No exclamation mark
      feedbackDiv.style.color = "#286748"; // Exact color from checklist
      // Remove background color if not required
      feedbackDiv.style.backgroundColor = "";
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#feasab"; // Exact color from checklist  
      // Remove background color if not required
      feedbackDiv.style.backgroundColor = "";
    }
  });
});
