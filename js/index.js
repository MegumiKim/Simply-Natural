import { carousel } from "./carousel_1.js";
import { userAlert } from "./userAlert.js";
import { createElement } from "./createHTMLelements/createElement.js";
import { renderThumbnails } from "./createHTMLelements/renderThumbnail.js";
const categoriesContainer = document.querySelector(".categories-container");

carousel();

const featuredOne = document.querySelector(".featured-one-container");
const featuredTwo = document.querySelector(".featured-two");

const featuredCategoryUrl =
  "http://localhost:10003/wp-json/wp/v2/posts?_embed&categories=3";

renderThumbnails(featuredCategoryUrl, featuredOne);

// async function getFeaturedItems() {
//   const response = await fetch(featuredCategoryUrl);
//   const json = await response.json();

//   json.forEach((post) => {
//     console.log(post._embedded);
//   });
//   console.log(json);
// }

// getFeaturedItems();
const url = "http://localhost:10003/wp-json/wp/v2/categories/";
async function fetchCategories() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    json.forEach((category) => {
      const name = createElement("h3", "category-name", category.name);
      const id = category.id;
      const categoryThumbnail = createElement(
        "a",
        "category-thumbnail",
        undefined,
        [name]
      );
      categoryThumbnail.href = "/html/listOfPosts.html?category=" + id;

      categoriesContainer.append(categoryThumbnail);
    });
  } catch (e) {
    categoriesContainer.innerHTML = userAlert("error", "Failed to fetch data");
  }
}

fetchCategories();

// async function fetchMedia(params) {
//   const url = "http://localhost:10003/wp-json/wp/v2/posts?id=52_embeded/";

//   const response = await fetch(url);
//   const json = await response.json();
// }

// fetchMedia();
