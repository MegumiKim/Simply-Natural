import { validateContactForm } from "./form/validateForm.js";
import { userAlert } from "./userAlert.js";

const form = document.querySelector("#contact-form");
const userFeedback = document.querySelector(".user-feedback");

form.onsubmit = function (event) {
  event.preventDefault();
  if (validateContactForm()) {
    userFeedback.innerHTML = userAlert("success", "Thank you for your message");
    form.reset();
  } else {
    userFeedback.innerHTML = userAlert(
      "error",
      "Please fill all the required fields"
    );
  }
};

form.onsubmit = async function postForm() {
  // const proxy = "https://noroffcors.herokuapp.com/";
  const url =
    "https://kimuramegumi.site/SimplyNatural/wp-json/contact-form-7/v1/contact-forms/79/feedback";

  const userName = "SimplyNatural";
  const password = "6z9A 2wbE LuRu 5Av1 GhBo exXH";

  try {
    console.log(new FormData(form));
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: "Basic" + userName + ":" + password,
      },
      body: new FormData(form),
    });

    form.innerHTML = userAlert("success", "Thank you");
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};

// const formContainer = document.querySelector(".form-container");

// async function getContactForm() {
//   const formPageUrl = "https://kimuramegumi.site/SimplyNatural/wp-json/wp/v2/pages/81";

//   const response = await fetch(formPageUrl);
//   const json = await response.json();
//   // console.log(json);

//   formContainer.innerHTML += json.content.rendered;

//   };
// }

// getContactForm();
