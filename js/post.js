import { createElement } from "./createHTMLelements/createElement.js";
import { modalFunc } from "./modal.js";
import { userAlert } from "./userAlert.js";
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = `http://localhost:10003/wp-json/wp/v2/posts/${id}?_embed`;

const container = document.querySelector(".container");

async function fetchPost(url) {
  try {
    const response = await fetch(url);
    const json = await response.json();

    // const imageSrc = json._embedded["wp:featuredmedia"];
    // const category = json._embedded["wp:term"][0][0].name;
    // const smallImage =
    //   json._embedded["wp:featuredmedia"][0].media_details.sizes.large
    //     .source_url;
    // console.log(smallImage);
    return json;
  } catch (e) {
    container.innerHTML = userAlert("error", "Failed to fetch data");
  }
}

async function renderPost(url) {
  const post = await fetchPost(url);
  console.log(post);
  const title = document.querySelector("title");
  title.innerHTML = `Simply Natural | ${post.title.rendered}`;

  const h1 = createElement("h1", "h1-post", post.title.rendered);
  const categoriesContainer = createElement(
    "div",
    "categories-post-container",
    undefined,
    []
  );
  const categories = post._embedded["wp:term"][0];
  categories.forEach(async function (category) {
    const postCategory = await createElement(
      "div",
      "category-post",
      category.name
    );
    categoriesContainer.append(postCategory);
  });
  const content = createElement("p", "content", post.content.rendered);
  // const img = await createElement(
  //   "img",
  //   "image",
  //   undefined,
  //   undefined,
  //   post._embedded["wp:featuredmedia"][0].source_url
  //   // post._embedded["wp:featuredmedia"][0].source_url
  // );
  const comment = createElement("div", "comment", undefined);
  const element = createElement("div", "post", undefined, [
    h1,
    categoriesContainer,
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
