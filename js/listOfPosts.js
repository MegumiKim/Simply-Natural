import { renderThumbnails } from "./createHTMLelements/renderThumbnail.js";
const container = document.querySelector(".list-of-post_container");

// const url = "https://kimuramegumi.site/SimplyNatural/wp-json/wp/v2/posts?_embed";
const url =
  "https://kimuramegumi.site/SimplyNatural/wp-json/wp/v2/posts?_fields=id,date,title,content,_links,_embedded&_embed=wp:featuredmedia,wp:term";

const categorySelector = document.querySelector("#category-selector");

categorySelector.onchange = async function (event) {
  const selectedCategory = event.target.value;
  if (selectedCategory) {
    const newUrl = url + "&categories=" + selectedCategory;
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
    const newUrl = url + "&categories=" + categoryID;
    console.log(newUrl);
    return renderThumbnails(newUrl, container);
  } else {
    return renderThumbnails(url, container);
  }
}

sortByCategory();

const viewMore = document.querySelector(".view-more");

viewMore.onclick = function () {
  const newUrl = url + "&?per_page=20";
  renderThumbnails(newUrl, container);
  viewMore.style.display = "none";
};
