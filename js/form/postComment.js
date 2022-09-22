import { renderComments } from "../createHTMLelements/renderComments.js";
import { userAlert } from "../userAlert.js";
import { validateCommentForm } from "./validateForm.js";

export async function postComment(event, id) {
  event.preventDefault();
  const userFeedback = document.querySelector(".user-feedback");
  const form = event.target;
  const name = document.querySelector("#name");
  const comment = document.querySelector("#comment");
  const commentsContainer = document.querySelector(".previous-comments");

  if (validateCommentForm()) {
    const data = JSON.stringify({
      post: id,
      author_name: name.value,
      content: comment.value,
    });

    const response = await fetch(form.action, {
      method: form.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });

    console.log(response);
    userFeedback.innerHTML = userAlert("success", "Thank you for your message");
    form.reset();
    renderComments(id, commentsContainer);
  } else {
    userFeedback.innerHTML = userAlert(
      "error",
      "Failed to send data to database"
    );
  }
}
