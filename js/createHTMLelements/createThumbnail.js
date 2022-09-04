import { createElement } from "./createElement.js";

export async function createThumbnail(post) {
  const title = createElement("h3", "thumbnail_title", post.title.rendered);
  const formattedDate = post.date;
  const date = createElement("p", "thumbnail_date", formattedDate);
  const img = await fetchImg(post);
  const category = await fetchCategory(post);
  const wrapper = createElement("div", "thumbnail-text-wrapper", undefined, [
    title,
    date,
    category,
  ]);

  const element = createElement("a", "thumbnail", undefined);
  element.append(img);
  element.append(wrapper);
  element.href = "/html/post.html";
  return element;
}

async function fetchImg(post) {
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

async function fetchCategory(post) {
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
