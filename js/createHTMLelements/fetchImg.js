import { createElement } from "./createElement.js";

export async function fetchImg(post) {
  const id = post.featured_media;
  const url =
    "https://kimuramegumi.site/SimplyNatural/wp-json/wp/v2/media/" + id;
    "onsole.log(json._embedded["wp:featuredmedia"][0].source_url"

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
