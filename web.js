// Display greeting based on time of day
function displayGreeting() {
  const greeting = document.getElementById("greeting");
  const hour = new Date().getHours();
  let message = "Hello!";

  if (hour < 12) message = "Good morning!";
  else if (hour < 18) message = "Good afternoon!";
  else message = "Good evening!";

  if (greeting) greeting.textContent = message;
}

// Toggle dark/light mode
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

// Toggle visibility of project details
function toggleDetails(id) {
  const details = document.getElementById(id);
  if (details) {
    details.classList.toggle("hidden");
  }
}

// Validate contact form with regex
function validateContactForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?[0-9]{7,15}$/;

  if (name === "" || !emailRegex.test(email) || !phoneRegex.test(phone)) {
    alert("Please enter valid name, email, and phone number.");
    return false;
  }
  alert("Form submitted successfully!");
  return true;
}
