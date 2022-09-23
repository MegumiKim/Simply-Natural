import { createElement } from "./createElement.js";
import { showNextSlide, showPreviousSlide } from "../carousel.js";
import { formatDate } from "./formatDate.js";

export async function createCarouselItem(post) {
  // console.log(post);
  const title = createElement("a", "carousel_title", post.title.rendered);
  const date = createElement("p", "carousel_date", formatDate(post));
  const img = await createElement(
    "img",
    "carousel-img",
    undefined,
    undefined,
    post._embedded["wp:featuredmedia"][0].source_url
  );

  const linkUrl = `/html/post.html?id=${post.id}`;
  const categoriesContainer = createElement(
    "div",
    "categories-carousel-container",
    undefined,
    []
  );
  const categories = post._embedded["wp:term"][0];
  categories.forEach(async function (category) {
    const postCategory = await createElement(
      "div",
      "category-carousel",
      category.name
    );
    categoriesContainer.append(postCategory);
  });
  const wrapper = createElement("div", "carousel-text-wrapper", undefined, [
    date,
    title,
    categoriesContainer,
  ]);
  title.href = linkUrl;

  // const dot = createElement("div", "dot", undefined);
  // const carouselNav = createElement("div", "carousel-nav", undefined, [dot]);
  const rightArrow = createElement("button", "arrow", "&#10095;");
  rightArrow.classList.add("forward");
  const leftArrow = createElement("button", "arrow", "&#10094;");
  leftArrow.classList.add("back");
  rightArrow.onclick = showNextSlide;
  leftArrow.onclick = showPreviousSlide;
  const element = await createElement("div", "carousel_item", undefined, [
    img,
    wrapper,
    rightArrow,
    leftArrow,
  ]);
  return element;
}
