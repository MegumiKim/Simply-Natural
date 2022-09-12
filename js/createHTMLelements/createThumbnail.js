import { createElement } from "./createElement.js";
// import { fetchImg } from "./fetchImg.js";
// import { fetchCategory } from "./fetchCategory.js";
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
    "img-wrapper",
    undefined,
    undefined,
    // post._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail
    //   .source_url
    post._embedded["wp:featuredmedia"][0].source_url
  );

  const category = await createElement(
    "div",
    "category",
    post._embedded["wp:term"][0][0].name
  );
  const wrapper = createElement("div", "thumbnail-text-wrapper", undefined, [
    title,
    date,
    category,
  ]);
  const linkUrl = `/html/post.html?id=${post.id}`;
  const element = createElement("a", "thumbnail", undefined);
  element.append(img);
  element.append(wrapper);
  element.href = linkUrl;

  return element;
}
