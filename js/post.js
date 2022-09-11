import { createElement } from "./createHTMLelements/createElement.js";
import { modalFunc } from "./modal.js";
import { userAlert } from "./userAlert.js";
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = `http://localhost:10003/wp-json/wp/v2/posts/${id}`;

const container = document.querySelector(".container");

async function fetchPost() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    return json;
  } catch (e) {
    container.innerHTML = userAlert("error", "Failed to fetch data");
  }
}

async function renderPost() {
  const post = await fetchPost();
  const title = document.querySelector("title");
  title.innerHTML = `Simply Natural | ${post.title.rendered}`;
  const h1 = createElement("h1", "h1-post", post.title.rendered);
  const content = createElement("p", "content", post.content.rendered);
  const element = createElement("div", "post", undefined, [h1, content]);
  container.append(element);
  const figures = document.querySelectorAll("figure");
  modalFunc(figures);
}

renderPost();

// async function modalFunc(figures) {
//   figures.forEach(function (figure) {
//     console.log(figure);
//   });
// }