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
  const url =
    "https://kimuramegumi.site/SimplyNatural/wp-json/contact-form-7/v1";

  const response = await fetch(url);
  const json = await response.json();

  console.log(json);
}

fetchContactForm();

const url =
  "https://kimuramegumi.site/SimplyNatural/wp-json/contact-form-7/v1/contact-forms/79/feedback";

// const formSubmissionHandle = (event) =>{
//   event.preventDefault();

//   const formElement = event.target, {action, method} = formElement,
//   body = new FormData(formElement
//     )
// }

// const inputName = document.querySelector("#name").value;

// const form = document.querySelector("#test-form");

// const response = await fetch(
//   "https://kimuramegumi.site/SimplyNatural/wp-json/contact-form-7/v1/contact-forms/79/feedback",
//   {
//     method: "POST",
//     headers: {
//       // Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: `{
//    "name": ${inputName}
//   }`,
//   }
// );

// async function test() {
//   console.log(response);
// }

// test();

// form.onsubmit = function (params) {
//   console.log("submit");
// };

// const data = {
//   inputName,
//   tel,
// };

// const options = {
//   method: "post",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(data),
// };

// form.post("/api", (request, response) => {
//   console.log(request);
// });
