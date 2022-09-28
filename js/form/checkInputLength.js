export function checkLength(event, minLength, feedBackField) {
  if (event.target.value.trim().length >= minLength) {
    feedBackField.innerHTML = "";
    return true;
  } else {
    feedBackField.innerHTML = `<p class='fail'>min ${minLength} characters</p>`;
    return false;
  }
}

export function checkInputLength(value, minLength) {
  const inputValue = value;
  if (inputValue.trim().length >= minLength) {
    return true;
  } else {
    return false;
  }
}
