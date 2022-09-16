// import { forward } from "../carousel_1.js";

import { createElement } from "./createElement.js";
// import { fetchCategory } from "./fetchCategory.js";
// import { fetchImg } from "./fetchImg.js";
import { formatDate } from "./formatDate.js";

export async function createCarouselItem(post) {
  // console.log(post);
  const title = createElement("a", "carousel_title", post.title.rendered);

  const date = createElement("p", "carousel_date", formatDate(post));
  // const img = await fetchImg(post);
  const img = await createElement(
    "img",
    "img-wrapper",
    undefined,
    undefined,
    post._embedded["wp:featuredmedia"][0].source_url
    // post._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url
  );

  // const category = await fetchCategory(post);
  const category = await createElement(
    "div",
    "category",
    post._embedded["wp:term"][0][0].name
  );
  const linkUrl = `/html/post.html?id=${post.id}`;

  const wrapper = createElement("div", "carousel-text-wrapper", undefined, [
    date,
    title,
    category,
  ]);
  title.href = linkUrl;
  // const rightArrow = createElement("button", "arrow", "&#10095;");
  // rightArrow.classList.add("forward");

  // const leftArrow = createElement("button", "arrow", "&#10094;");
  // leftArrow.classList.add("back");
  const element = await createElement("div", "carousel_item", undefined);

  element.append(img);
  element.append(wrapper);

  // element.append(rightArrow);
  // element.append(leftArrow);
  return element;
}
