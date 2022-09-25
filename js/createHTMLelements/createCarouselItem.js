import { createElement } from "./createElement.js";
import { formatDate } from "./formatDate.js";

export async function createCarouselItem(post) {
  try {
    const title = createElement("a", "carousel_title", post.title.rendered);
    const date = createElement("p", "carousel_date", formatDate(post));
    const img = await createElement(
      "img",
      "carousel-img",
      undefined,
      undefined,
      post._embedded["wp:featuredmedia"][0].source_url
    );
    const imgWrapper = createElement("div", "carousel-img-wrapper", undefined, [
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
    ]);

    return element;
  } catch (e) {
    console.log(e);
    return "An Error Occurred while fetching data";
  }
}
