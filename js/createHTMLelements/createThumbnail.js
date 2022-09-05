import { createElement } from "./createElement.js";
import { fetchImg } from "./fetchImg.js";
import { fetchCategory } from "./fetchCategory.js";
import { formatDate } from "./formatDate.js";

export async function createThumbnail(post) {
  const title = createElement("h3", "thumbnail_title", post.title.rendered);
  const date = createElement(
    "p",
    "thumbnail_date",
    formatDate(post),
    undefined
  );
  const img = await fetchImg(post);
  const category = await fetchCategory(post);
  const wrapper = createElement("div", "thumbnail-text-wrapper", undefined, [
    title,
    category,
    date,
  ]);
  const linkUrl = `/html/post.html?id=${post.id}`;
  const element = createElement("a", "thumbnail", undefined);
  element.append(img);
  element.append(wrapper);
  element.href = linkUrl;

  return element;
}

// export async function createCarouselItem(post) {
//   const title = createElement("h3", "carousel_title", post.title.rendered);
//   const date = createElement("p", "carousel_date", formatDate(post));
//   const img = await fetchImg(post);
//   const category = await fetchCategory(post);

//   const linkUrl = `/html/post.html?id=${post.id}`;
//   const button = createElement("a", "read-button", "READ");
//   button.href = linkUrl;
//   console.log(linkUrl);

//   const wrapper = createElement("div", "carousel-text-wrapper", undefined, [
//     date,
//     title,
//     category,
//     button,
//   ]);

// async function fetchImg(post) {
//   const id = post.featured_media;
//   const url = "http://localhost:10003/wp-json/wp/v2/media/" + id;

//   try {
//     const response = await fetch(url);
//     const json = await response.json();

//     const element = document.createElement("img");
//     element.src = json.guid.rendered;
//     element.classList.add("thumbnail_img");

//     return element;
//   } catch (e) {
//     console.log(e);
//   }
// }
