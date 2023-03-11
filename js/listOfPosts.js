import { renderThumbnails } from "./createHTMLelements/renderThumbnail.js";
import { renderCategoryTitle } from "./createHTMLelements/renderCategoryTitle.js";
import { sortByCategory } from "./components/sortByCategory.js";
const container = document.querySelector(".list-of-post_container");
const baseUrl = "https://kimuramegumi.site/SimplyNatural/wp-json/wp/v2/";
const url =
  baseUrl +
  "posts?_fields=id,date,title,_links,&_embed=wp:featuredmedia,wp:term";

const categorySelector = document.querySelector("#category-selector");
const h2 = document.querySelector("h2");
const viewMore = document.querySelector(".view-more");

categorySelector.onchange = async function (event) {
  const id = event.target.value;

  if (id) {
    const newUrl = url + "&categories=" + id;
    const categoryUrl = baseUrl + `categories/${id}`;

    const selectedCategory = await renderCategoryTitle(categoryUrl);
    h2.innerHTML = selectedCategory;
    renderThumbnails(newUrl, container);
  } else {
    h2.innerHTML = "All Categories";
    renderThumbnails(url, container);
  }
};

sortByCategory(baseUrl, url, container);

viewMore.onclick = function () {
  const newUrl = url + "&per_page=20";
  renderThumbnails(newUrl, container);
  viewMore.style.display = "none";
};
