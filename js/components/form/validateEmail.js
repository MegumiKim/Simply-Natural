const emailError = document.querySelector(".email-error");

export function checkEmail(event) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMach = regEx.test(event.target.value);
  if (patternMach) {
    emailError.innerHTML = "";
    return true;
  } else {
    emailError.innerHTML = "invalid email address";
    return false;
  }
}
