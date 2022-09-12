import { createElement } from "./createHTMLelements/createElement.js";
import { modalFunc } from "./modal.js";
import { userAlert } from "./userAlert.js";
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = `https://kimuramegumi.site/SimplyNatural/wp-json/wp/v2/posts/${id}?_embed`;

const container = document.querySelector(".container");

async function fetchPost() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    const imageSrc = json._embedded["wp:featuredmedia"];
    const category = json._embedded["wp:term"][0][0].name;
    const smallImage =
      json._embedded["wp:featuredmedia"][0].media_details.sizes.large
        .source_url;
    console.log(category);
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
  const img = await createElement(
    "img",
    "image",
    undefined,
    undefined,
    post._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url
    // post._embedded["wp:featuredmedia"][0].source_url
  );
  const element = createElement("div", "post", undefined, [h1, content, img]);
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
