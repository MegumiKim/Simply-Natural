export function checkLength(event, minLength, feedBackField) {
  if (event.target.value.trim().length >= minLength) {
    feedBackField.innerHTML = "";
    return true;
  } else {
    feedBackField.innerHTML = `<p class='fail'>min ${minLength} characters</p>`;
    return false;
  }
}
