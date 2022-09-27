// import { formatDate } from "../createHTMLelements/formatDate";

const userName = document.querySelector("#name");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const nameError = document.querySelector(".name-error");
const subjectError = document.querySelector(".subject-error");
const emailError = document.querySelector(".email-error");
const messageError = document.querySelector(".message-error");
const commentError = document.querySelector(".comment-error");
const email = document.querySelector("#email");
const comment = document.querySelector("#comment");
const submitBtn = document.querySelector("#submit");
const letterCount = document.querySelector(".letter-count");
// export function validateContactForm() {
//   if (
//     checkInputLength(userName, 5, nameError) &&
//     checkInputLength(subject, 15, subjectError) &&
//     validateEmail(email) &&
//     checkInputLength(message, 25, messageError)
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

export function validateCommentForm() {
  if (
    checkInputLength(userName, 2, nameError) &&
    checkInputLength(comment, 2, commentError)
  ) {
    return true;
  }
}

function checkInputLength(inputField, len, errorField) {
  if (inputField.value.trim().length >= len) {
    errorField.innerHTML = "";
    return true;
  } else {
    errorField.innerHTML += `Please input minimum ${len} characters`;
    // console.log(errorField.classList);
    // errorField.classList.add = "fail";
    return false;
  }
}

function validateEmail(email) {
  console.log(email);
  const regEx = /\S+@\S+\.\S+/;
  const patternMach = regEx.test(email.value);
  if (patternMach) {
    emailError.innerHTML = "";
    return true;
  } else {
    emailError.innerHTML = "Please input valid email";
    return false;
  }
}

userName.onblur = (event) => checkLength(event, 5, nameError);
email.onblur = (event) => checkEmail(event);
subject.onblur = (event) => checkLength(event, 15, subjectError);
message.onblur = (event) => checkLength(event, 25, messageError);

function checkLength(event, minLength, feedBackField) {
  if (event.target.value.trim().length >= minLength) {
    feedBackField.innerHTML = "";
    return true;
  } else {
    feedBackField.innerHTML = `<p class='fail'>min ${minLength} characters</p>`;
    return false;
  }
}

function checkEmail(event) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMach = regEx.test(event.target.value);
  if (patternMach) {
    emailError.innerHTML = "";
    return true;
  } else {
    emailError.innerHTML = "Please input valid email";
    return false;
  }
}

export function validateContactForm() {
  if (
    checkInputLength(userName, 5, nameError) &&
    checkInputLength(subject, 15, subjectError) &&
    validateEmail(email) &&
    checkInputLength(message, 25, messageError)
  ) {
    submitBtn.disabled = false;
    return true;
  } else {
    submitBtn.disabled = true;
    return false;
  }
}

message.onkeyup = (event) => countLetters(event);
function countLetters(event) {
  let count = event.target.value.trim().length;

  letterCount.innerHTML = `count: ${count}`;
}
