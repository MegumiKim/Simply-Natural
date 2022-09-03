export const userAlert = (type = "error", message = "error") =>
  `<div class="${type}">${message}</div>`;
