import { renderThumbnails } from "./createHTMLelements/renderThumbnail.js";
import { renderTitle } from "./createHTMLelements/renderTitle.js";

const container = document.querySelector(".list-of-post_container");
const baseUrl = "https://kimuramegumi.site/SimplyNatural/wp-json/wp/v2/posts";
const url =
  baseUrl + "?_fields=id,date,title,_links,&_embed=wp:featuredmedia,wp:term";
const categorySelector = document.querySelector("#category-selector");
const h2 = document.querySelector("h2");

categorySelector.onchange = async function (event) {
  const id = event.target.value;
  if (id) {
    const newUrl = url + "&categories=" + id;
    const categoryUrl = `https://kimuramegumi.site/SimplyNatural/wp-json/wp/v2/categories/${id}`;
    h2.innerHTML = await renderTitle(categoryUrl);
    renderThumbnails(newUrl, container);
  } else {
    h2.innerHTML = "All Categories";
    renderThumbnails(url, container);
  }
};

export function sortByCategory() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const categoryID = params.get("category");

  if (categoryID) {
    const newUrl = url + "&categories=" + categoryID;
    return renderThumbnails(newUrl, container);
  } else {
    return renderThumbnails(url, container);
  }
}

sortByCategory();

const viewMore = document.querySelector(".view-more");

viewMore.onclick = function () {
  const newUrl = url + "&per_page=20";
  renderThumbnails(newUrl, container);
  console.log(newUrl);
  viewMore.style.display = "none";
};
