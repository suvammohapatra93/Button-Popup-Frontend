const button = document.querySelector("button");
const closeIcon = document.querySelector(".close-icon");
const popup = document.querySelector(".popup-container");
const overlay = document.querySelector(".overlay");
const form = document.getElementById("signup-form");
const successMessage = document.querySelector(".success-message");
const cookieConsent = document.querySelector(".cookie-consent");
const acceptCookiesButton = document.getElementById("accept-cookies");

// Check local storage to see if user has signed up
if (!localStorage.getItem("signedUp")) {
  button.style.display = "block"; // Show button if not signed up
}

// Show cookie consent if cookies not accepted
if (!localStorage.getItem("cookiesAccepted")) {
  cookieConsent.style.display = "block";
}

button.addEventListener("click", () => {
  popup.classList.add("popup-open");
});

closeIcon.addEventListener("click", () => {
  closePopup();
});

overlay.addEventListener("click", () => {
  closePopup();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailInput = form.querySelector("input[type='email']");

  if (emailInput.checkValidity()) {
    successMessage.style.display = "block";
    localStorage.setItem("signedUp", "true"); // Mark as signed up
    form.reset();
    setTimeout(closePopup, 2000); // Close popup after 2 seconds
  }
});

function closePopup() {
  popup.classList.remove("popup-open");
  successMessage.style.display = "none"; // Hide success message
}

// Handle cookie consent
acceptCookiesButton.addEventListener("click", () => {
  localStorage.setItem("cookiesAccepted", "true"); // Mark cookies as accepted
  cookieConsent.style.display = "none"; // Hide cookie consent message
});
