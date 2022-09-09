import { renderThumbnails } from "./createHTMLelements/renderThumbnail.js";
const container = document.querySelector(".list-of-post_container");

const url = "http://localhost:10003/wp-json/wp/v2/posts";

// renderThumbnails(url, container);

const categorySelector = document.querySelector("#category-selector");

categorySelector.onchange = async function (event) {
  const selectedCategory = event.target.value;
  if (selectedCategory) {
    const newUrl = url + "?categories=" + selectedCategory;
    renderThumbnails(newUrl, container);
  } else {
    renderThumbnails(url, container);
  }
};

export function sortByCategory() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const categoryID = params.get("category");

  if (categoryID) {
    const newUrl = url + "?categories=" + categoryID;
    return renderThumbnails(newUrl, container);
  } else {
    return renderThumbnails(url, container);
  }
}

sortByCategory();
