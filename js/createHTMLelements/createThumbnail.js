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
