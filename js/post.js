import { createElement } from "./createHTMLelements/createElement.js";
import { formatDate } from "./createHTMLelements/formatDate.js";
import { modalFunc } from "./modal.js";
import { userAlert } from "./userAlert.js";
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = `http://localhost:10003/wp-json/wp/v2/posts/${id}?_fields=id,date,title,content,_links,_embedded&_embed=wp:featuredmedia,wp:term`;

// const url = `http://localhost:10003/wp-json/wp/v2/posts/${id}?_embed`;

const container = document.querySelector(".container");

async function fetchPost(url) {
  try {
    const response = await fetch(url);
    const json = await response.json();

    return json;
  } catch (e) {
    container.innerHTML = userAlert("error", "Failed to fetch data");
  }
}

async function renderPost(url) {
  const post = await fetchPost(url);
  const title = document.querySelector("title");
  title.innerHTML = `Simply Natural | ${post.title.rendered}`;
  const h1 = createElement("h1", "h1-post", post.title.rendered);
  const content = createElement("p", "content", post.content.rendered);

  const comment = createElement("div", "comment", undefined);
  const element = createElement("div", "post", undefined, [
    h1,
    content,
    comment,
  ]);

  container.append(element);
  const figures = document.querySelectorAll("figure");
  modalFunc(figures);
}

renderPost(url);

// async function modalFunc(figures) {
//   figures.forEach(function (figure) {
//     console.log(figure);
//   });
// }

const commentsContainer = document.querySelector(".comments");
async function fetchComments(id) {
  const commentsUrl = `http://localhost:10003/wp-json/wp/v2/comments?post=${id}`;

  const response = await fetch(commentsUrl);
  const json = await response.json();

  return json;
}

async function renderComment(postID) {
  const comments = await fetchComments(postID);

  if (comments) {
    comments.forEach((comment) => {
      const name = createElement("p", "name_comment", comment.author_name);
      const dateFormatted = formatDate(comment);
      const date = createElement("time", "date_comment", dateFormatted);
      const metaData = createElement("div", "comment-meta", undefined, [
        name,
        date,
      ]);
      const content = comment.content.rendered;
      const element = createElement("div", "comment", content, [metaData]);

      commentsContainer.append(element);
    });
  }
}

renderComment(id);
