// import { sendForm } from "./form/sendForm.js";
import { validateContactForm } from "./form/validateForm.js";
import { userAlert } from "./userAlert.js";
import { contactInputOnblur } from "./form/validateForm.js";

const form = document.querySelector("#contact-form");
const userFeedback = document.querySelector(".user-feedback");

form.addEventListener("submit", (event) => sendForm(event));

export async function sendForm(event) {
  event.preventDefault();
  const form = event.target;
  if (validateContactForm()) {
    const response = await fetch(form.action, {
      method: form.method,
      body: new FormData(form),
    });
    userFeedback.innerHTML = userAlert(
      "success",
      "Thank you for your message. Redirecting to home page in 5 seconds."
    );
    form.reset();
    const timer = setTimeout(function () {
      window.location = "/index.html";
    }, 5000);
  } else {
    userFeedback.innerHTML = userAlert(
      "error",
      "Please fill all the required fields"
    );
  }
}

contactInputOnblur();
