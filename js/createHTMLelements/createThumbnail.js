import { createCategory } from "./createCategory.js";
import { createElement } from "./createElement.js";
import { createImg } from "./createImg.js";
import { formatDate } from "./formatDate.js";

export async function createThumbnail(post) {
  const title = createElement("h3", "thumbnail_title", post.title.rendered);
  const date = createElement(
    "p",
    "thumbnail_date",
    formatDate(post),
    undefined
  );

  const imgWrapper = await createImg(post, "thumbnail");
  const categoriesContainer = await createCategory(post, "thumbnail");
  const wrapper = createElement("div", "thumbnail-text-wrapper", undefined, [
    title,
    date,
    categoriesContainer,
  ]);
  const linkUrl = `/html/post.html?id=${post.id}`;
  const element = createElement("a", "thumbnail", undefined);
  element.append(imgWrapper);
  element.append(wrapper);
  element.href = linkUrl;

  return element;
}
