import { sendForm } from "./form/sendForm.js";

const form = document.querySelector("#contact-form");
const body = new FormData(form);
form.addEventListener("submit", (event) => sendForm(event, body));
