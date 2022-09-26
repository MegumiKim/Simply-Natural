import { createElement } from "./createElement.js";

export async function createCategory(post, parent) {
  const categoriesContainer = createElement(
    "div",
    `categories-${parent}-container`,
    undefined,
    []
  );
  const categories = await post._embedded["wp:term"][0];
  categories.forEach(async function (category) {
    const postCategory = await createElement(
      "div",
      `category-${parent}`,
      category.name
    );
    categoriesContainer.append(postCategory);
  });

  return categoriesContainer;
}
