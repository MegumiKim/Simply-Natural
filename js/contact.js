import { validateContactForm } from "./form/validateForm.js";
import { userAlert } from "./userAlert.js";

const contactForm = document.querySelector(".contact-form");
const userFeedback = document.querySelector(".user-feedback");

contactForm.onsubmit = function (event) {
  event.preventDefault();
  if (validateContactForm()) {
    userFeedback.innerHTML = userAlert("success", "Thank you for your message");
    contactForm.reset();
  } else {
    userFeedback.innerHTML = userAlert(
      "error",
      "Please fill all the required fields"
    );
  }
};
