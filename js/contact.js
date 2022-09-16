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
//   const url =
//     "http://localhost:10003/wp-json/contact-form-7/v1/contact-forms/79";

//   const response = await fetch(url);
//   const json = await response.json();

//   console.log(json);
// }

// fetchContactForm();
// const form = document.querySelector("#test-form");
const formContainer = document.querySelector(".form-container");

async function getContactForm() {
  const formPageUrl = "http://localhost:10003/wp-json/wp/v2/pages/81";

  const response = await fetch(formPageUrl);
  const json = await response.json();
  // console.log(json);

  formContainer.innerHTML += json.content.rendered;

  const form = document.querySelector(".wpcf7-form");

  form.onsubmit = async function postForm() {
    console.log("working");
    const url =
      "http://localhost10008/wp-json/contact-form-7/v1/contact-forms/79/feedback";
    try {
      const response = await fetch(url, {
        method: form.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: new FormData(form),
      });
      console.log(response.header);
    } catch (e) {
      console.log(e);
    }
  };
}

getContactForm();
