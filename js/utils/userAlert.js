export const userAlert = (type = "error", message = "An error occurred") =>
  `<div class="${type}">${message}</div>`;
