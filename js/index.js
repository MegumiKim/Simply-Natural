import { carousel } from "./carousel_1.js";
import { userAlert } from "./userAlert.js";
import { createElement } from "./createHTMLelements/createElement.js";
import { renderThumbnails } from "./createHTMLelements/renderThumbnail.js";
import { createThumbnail } from "./createHTMLelements/createThumbnail.js";
const categoriesContainer = document.querySelector(".categories-container");

carousel();

const featuredOne = document.querySelector(".featured-one-container");
const featuredTwo = document.querySelector(".featured-two-container");

// rendering trending topics
const featuredCategoryUrl =
  "https://kimuramegumi.site/SimplyNatural/wp-json/wp/v2/posts?_fields=id,date,title,content,_links,_embedded&_embed=wp:featuredmedia,wp:term&categories=3";

renderThumbnails(featuredCategoryUrl, featuredOne);

// rendering top story
const topStoryUrl =
  "https://kimuramegumi.site/SimplyNatural/wp-json/wp/v2/posts/86?_fields=id,date,title,_links,_embedded&_embed=wp:featuredmedia,wp:term";

async function getFeaturedItem(url) {
  const response = await fetch(url);
  const json = await response.json();

  const html = await createThumbnail(json);

  featuredTwo.append(html);
  console.log(html);
}

getFeaturedItem(topStoryUrl);

// const url = "https://kimuramegumi.site/SimplyNatural/wp-json/wp/v2/categories/";
// async function fetchCategories() {
//   try {
//     const response = await fetch(url);
//     const json = await response.json();

//     json.forEach((category) => {
//       const name = createElement("h3", "category-name", category.name);
//       const id = category.id;
//       const categoryThumbnail = createElement(
//         "a",
//         "category-thumbnail",
//         undefined,
//         [name]
//       );
//       categoryThumbnail.href = "/html/listOfPosts.html?category=" + id;

//       categoriesContainer.append(categoryThumbnail);
//     });
//   } catch (e) {
//     categoriesContainer.innerHTML = userAlert("error", "Failed to fetch data");
//   }
// }

// fetchCategories();

// async function fetchMedia(params) {
//   const url = "https://kimuramegumi.site/SimplyNatural/wp-json/wp/v2/posts?id=52_embeded/";

//   const response = await fetch(url);
//   const json = await response.json();
// }

// fetchMedia();
