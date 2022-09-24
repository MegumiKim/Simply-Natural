import { createElement } from "./createElement.js";
import { showNextSlide, showPreviousSlide } from "../carousel.js";
import { formatDate } from "./formatDate.js";

export async function createCarouselItem(post) {
  try {
    const title = createElement("a", "carousel_title", post.title.rendered);
    const date = createElement("p", "carousel_date", formatDate(post));
    // const dot1 = createElement("div", "dot", undefined);
    // dot1.classList.add("carousel-dot_selected");
    // const dot2 = createElement("div", "dot", undefined);
    // const dot3 = createElement("div", "dot", undefined);
    // const dot4 = createElement("div", "dot", undefined);
    // const dot5 = createElement("div", "dot", undefined);
    // const nav = createElement("div", "carousel-nav", undefined, [
    //   dot1,
    //   dot2,
    //   dot3,
    //   dot4,
    //   dot5,
    // ]);

    // const rightArrow = createElement("button", "arrow", "&#10095;");
    // const leftArrow = createElement("button", "arrow", "&#10094;");
    // rightArrow.classList.add("forward");
    // leftArrow.classList.add("back");
    // rightArrow.onclick = showNextSlide;
    // leftArrow.onclick = showPreviousSlide;
    const img = await createElement(
      "img",
      "carousel-img",
      undefined,
      undefined,
      post._embedded["wp:featuredmedia"][0].source_url
    );
    const imgWrapper = createElement("div", "img-wrapper", undefined, [
      // nav,
      img,
    ]);

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
    const textWrapper = createElement(
      "div",
      "carousel-text-wrapper",
      undefined,
      [date, title, categoriesContainer]
    );
    title.href = linkUrl;

    const element = await createElement("div", "carousel_item", undefined, [
      imgWrapper,
      textWrapper,
      // rightArrow,
      // leftArrow,
    ]);

    return element;
  } catch (e) {
    console.log(e);
  }
}
