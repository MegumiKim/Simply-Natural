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

async function fetchContactForm() {
  const url = "http://localhost:10003/wp-json/contact-form-7/v1/contact-forms";

  const response = await fetch(url);
  const json = await response.json();

  console.log(json);
}

fetchContactForm();
