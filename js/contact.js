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

// async function fetchContactForm() {
//   const url = "http://localhost:10003/wp-json/contact-form-7/v1/contact-forms";

//   const response = await fetch(url);
//   const json = await response.json();

//   console.log(json);
// }

// fetchContactForm();

const url =
  "http://localhost:10003/wp-json/contact-form-7/v1/contact-forms/79/feedback";

// const formSubmissionHandle = (event) =>{
//   event.preventDefault();

//   const formElement = event.target, {action, method} = formElement,
//   body = new FormData(formElement
//     )
// }

const inputName = document.querySelector("#name").value;

const form = document.querySelector("#test-form");
form.onsubmit = function () {
  console.log("submit");
};
