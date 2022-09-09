import { createElement } from "./createElement.js";

export async function fetchImg(post) {
  const id = post.featured_media;
  const url = "http://localhost:10003/wp-json/wp/v2/media/" + id;

  try {
    const response = await fetch(url);
    const json = await response.json();

    const img = document.createElement("img");
    img.src = json.guid.rendered;

    const element = createElement("div", "img-wrapper", undefined, [img]);
    // element.classList.add("thumbnail_img");

    return element;
  } catch (e) {
    console.log(e);
  }
}
