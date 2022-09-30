import { createCategory } from "./createCategory.js";
import { createElement } from "./createElement.js";
import { createImg } from "./createImg.js";
import { formatDate } from "./formatDate.js";

export async function createCarouselItem(post) {
  try {
    const title = createElement("h1", "carousel_title", post.title.rendered);
    const title_wrapper = createElement(
      "a",
      "carousel-title-wrapper",
      undefined,
      [title]
    );
    const date = createElement("p", "carousel_date", formatDate(post));

    const imgWrapper = await createImg(post, "carousel");
    const linkUrl = `/html/post.html?id=${post.id}`;
    const categoriesContainer = await createCategory(post, "carousel");
    const textWrapper = createElement(
      "div",
      "carousel-text-wrapper",
      undefined,
      [date, title_wrapper, categoriesContainer]
    );
    title_wrapper.href = linkUrl;

    const element = await createElement("div", "carousel_item", undefined, [
      imgWrapper,
      textWrapper,
    ]);

    return element;
  } catch (e) {
    console.log(e);
    return "An Error Occurred while fetching data";
  }
}
