// import { forward } from "../carousel_1.js";

import { createElement } from "./createElement.js";
import { fetchCategory } from "./fetchCategory.js";
import { fetchImg } from "./fetchImg.js";
import { formatDate } from "./formatDate.js";

export async function createCarouselItem(post) {
  const title = createElement("h3", "carousel_title", post.title.rendered);
  const date = createElement("p", "carousel_date", formatDate(post));
  const img = await fetchImg(post);
  const category = await fetchCategory(post);

  const linkUrl = `/html/post.html?id=${post.id}`;

  const wrapper = createElement("div", "carousel-text-wrapper", undefined, [
    date,
    title,
    category,
  ]);

  // const rightArrow = createElement("button", "arrow", "&#10095;");
  // rightArrow.classList.add("forward");

  // const leftArrow = createElement("button", "arrow", "&#10094;");
  // leftArrow.classList.add("back");
  const element = await createElement("a", "carousel_item", undefined);

  element.append(img);
  element.append(wrapper);
  element.href = linkUrl;
  // element.append(rightArrow);
  // element.append(leftArrow);
  return element;
}
