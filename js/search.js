import { renderThumbnails } from "./createHTMLelements/renderThumbnail.js";

const searchButton = document.querySelector(".search-button");
const container = document.querySelector(".results-container");
const searchInput = document.querySelector("#search-input");

const url = "https://kimuramegumi.site/SimplyNatural/wp-json/wp/v2/posts";
searchInput.onkeypress = async function () {
  if (event.keyCode === 13) {
    const userInput = searchInput.value.toLowerCase().trim();
    const newUrl = url + `?search=${userInput}`;
    container.innerHTML = "";
    renderThumbnails(newUrl, container);
  }
};

searchButton.onclick = async function () {
  const userInput = searchInput.value.toLowerCase().trim();
  const newUrl = url + `?search=${userInput}`;
  container.innerHTML = "";
  renderThumbnails(newUrl, container);
};
