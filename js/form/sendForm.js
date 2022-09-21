import { userAlert } from "../userAlert.js";
import { validateContactForm } from "./validateForm.js";

const userFeedback = document.querySelector("user-feedback");

export async function sendForm(event) {
  event.preventDefault();
  const form = event.target;
  // if (validateContactForm()) {
  const response = await fetch(form.action, {
    method: form.method,
    body: new FormData(form),
  });
  userFeedback.innerHTML = userAlert("success", "Thank you for your message");
  form.reset();
  // } else {
  //   userFeedback.innerHTML = userAlert(
  //     "error",
  //     "Please fill all the required fields"
  //   );
  // }
}
