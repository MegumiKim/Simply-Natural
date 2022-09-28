import { renderComments } from "../createHTMLelements/renderComments.js";
import { userAlert } from "../userAlert.js";
import { validateCommentForm } from "./validateForm.js";

const userFeedback = document.querySelector(".user-feedback");
const name = document.querySelector("#name");
const message = document.querySelector("#message");
const commentsContainer = document.querySelector(".previous-comments");

export async function postComment(event, id) {
  event.preventDefault();
  const form = event.target;
  if (validateCommentForm()) {
    const data = JSON.stringify({
      post: id,
      author_name: name.value,
      content: message.value,
    });

    const response = await fetch(form.action, {
      method: form.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });

    console.log(response);
    userFeedback.innerHTML = userAlert(
      "success",
      "Comment Posted Successfully"
    );
    form.reset();
    renderComments(id, commentsContainer);
  } else {
    userFeedback.innerHTML = userAlert("error", "Please fill required fields");
  }
}
