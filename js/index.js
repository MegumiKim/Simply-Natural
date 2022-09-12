import { carousel } from "./carousel_1.js";
import { userAlert } from "./userAlert.js";
import { createElement } from "./createHTMLelements/createElement.js";
const categoriesContainer = document.querySelector(".categories-container");

carousel();

const url = "https://kimuramegumi.site/SimplyNatural/wp-json/wp/v2/categories/";
async function fetchCategories() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    json.forEach((category) => {
      const name = createElement("a", "category-name", category.name);
      const id = category.id;
      name.href = "/html/listOfPosts.html?category=" + id;

      categoriesContainer.append(name);
    });

    // const element = document.createElement("p");
    // element.innerHTML = json.name;
    // element.classList.add("category");
    // console.log(element);
    // return element;
  } catch (e) {
    categoriesContainer.innerHTML = userAlert("error", "Failed to fetch data");
  }
}

fetchCategories();

async function fetchMedia(params) {
  const url = "http://localhost:10003/wp-json/wp/v2/posts?id=52_embeded/";

  const response = await fetch(url);
  const json = await response.json();
}

fetchMedia();
