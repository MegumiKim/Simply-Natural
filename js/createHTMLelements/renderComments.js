import { fetchAPI } from "../fetchAPI.js";
import { userAlert } from "../userAlert.js";
import { createElement } from "./createElement.js";
import { formatDate } from "./formatDate.js";

export async function renderComments(id, container) {
  container.innerHTML = "";
  try {
    const commentsUrl = `https://kimuramegumi.site/SimplyNatural/wp-json/wp/v2/comments?post=${id}`;
    const comments = await fetchAPI(commentsUrl);

    if (comments.length) {
      comments.forEach((comment) => {
        const name = createElement("p", "name_comment", comment.author_name);
        const dateFormatted = formatDate(comment);
        const date = createElement("time", "date_comment", dateFormatted);
        const metaData = createElement("div", "comment-meta", undefined, [
          name,
          date,
        ]);
        const content = comment.content.rendered;
        const element = createElement("div", "user-comment", content, [
          metaData,
        ]);

        container.append(element);
      });
    } else {
      container.innerHTML = "<p>Be the first one to comment on the article</p>";
    }
  } catch (e) {
    container.innerHTML = userAlert("error", "an error occurred");
  }
}
