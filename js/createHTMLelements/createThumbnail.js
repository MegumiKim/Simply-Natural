import { createElement } from "./createElement.js";

export function createThumbnail(post) {
  const title = createElement("h3", "thumbnail_title", post.title.rendered);
  const formatedDate = post.date;
  const date = createElement("p", "thumbnail_date", formatedDate);

  const element = createElement("a", "thumbnail", undefined, [title, date]);
  element.href = "/html/post.html";
  return element;
}

export async function fetchImg(post) {
  const id = post.featured_media;
  const url = "http://localhost:10003/wp-json/wp/v2/media/" + id;

  try {
    const response = await fetch(url);
    const json = await response.json();

    const element = document.createElement("img");
    element.src = json.guid.rendered;
    element.classList.add("thumbnail_img");

    return element;
  } catch (e) {
    console.log(e);
  }
}

export async function fetchCategory(post) {
  const id = post.categories[0];
  const url = "http://localhost:10003/wp-json/wp/v2/categories/" + id;

  try {
    const response = await fetch(url);
    const json = await response.json();

    const element = document.createElement("p");
    element.innerHTML = json.name;
    element.classList.add("thumbnail_category");

    return element;
  } catch (e) {
    console.log(e);
  }
}
