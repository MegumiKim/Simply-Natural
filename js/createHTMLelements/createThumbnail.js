import { createElement } from "./createElement.js";
import { formatDate } from "./formatDate.js";

export async function createThumbnail(post) {
  const title = createElement("h3", "thumbnail_title", post.title.rendered);
  const date = createElement(
    "p",
    "thumbnail_date",
    formatDate(post),
    undefined
  );

  const img = await createElement(
    "img",
    "img",
    undefined,
    undefined,
    post._embedded["wp:featuredmedia"][0].source_url,
    post._embedded["wp:featuredmedia"][0].alt_text
  );
  const imgWrapper = createElement("div", "img-wrapper", undefined, [img]);

  const categoriesContainer = createElement(
    "div",
    "categories-thumbnail-container",
    undefined,
    []
  );
  const categories = post._embedded["wp:term"][0];
  categories.forEach(async function (category) {
    const postCategory = await createElement("div", "category", category.name);
    categoriesContainer.append(postCategory);
  });
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
