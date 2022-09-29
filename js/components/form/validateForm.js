import { checkLength } from "./checkInputLength.js";
import { checkEmail } from "./validateEmail.js";

const userName = document.querySelector("#name");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const nameError = document.querySelector(".name-error");
const subjectError = document.querySelector(".subject-error");
const messageError = document.querySelector(".message-error");
const emailError = document.querySelector(".email-error");
const letterCount = document.querySelector(".letter-count");

// contact form validations

export function contactInputOnblur() {
  userName.onblur = (event) => checkLength(event, 5, nameError);
  email.onblur = (event) => checkEmail(event);
  subject.onblur = (event) => checkLength(event, 15, subjectError);
  message.onblur = (event) => checkLength(event, 25, messageError);
}

export function validateContactForm() {
  if (
    nameError.innerHTML === "" &&
    subjectError.innerHTML === "" &&
    emailError.innerHTML === "" &&
    messageError.innerHTML === ""
  ) {
    return true;
  } else {
    return false;
  }
}
// Comment Form validations

export function commentsInputOnBlur() {
  userName.onblur = (event) => checkLength(event, 2, nameError);
  message.onblur = (event) => checkLength(event, 2, messageError);
}

export function validateCommentForm() {
  if (nameError.innerHTML === "" && messageError.innerHTML === "") {
    return true;
  } else {
    return false;
  }
}

message.onkeyup = (event) => countLetters(event);
function countLetters(event) {
  let count = event.target.value.trim().length;

  letterCount.innerHTML = `letter count: ${count}`;
}
