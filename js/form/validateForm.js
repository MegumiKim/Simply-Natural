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

export function validateContactForm() {
  if (
    checkInputLength(userName, 2, nameError) &&
    checkInputLength(subject, 5, subjectError) &&
    validateEmail(email) &&
    checkInputLength(message, 5, messageError)
  ) {
    return true;
  }
}

export function validateCommentForm() {
  if (
    checkInputLength(userName, 2, nameError) &&
    checkInputLength(comment, 2, commentError)
  ) {
    return true;
  }
}

function checkInputLength(inputField, len, errorField) {
  // console.log(inputField.value);
  if (inputField.value.trim().length >= len) {
    errorField.innerHTML = "";
    return true;
  } else {
    errorField.innerHTML = `Please input minimum ${len} characters`;
    return false;
  }
}

function validateEmail(email) {
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
