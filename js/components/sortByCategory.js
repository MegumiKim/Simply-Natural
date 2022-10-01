import { renderThumbnails } from "../createHTMLelements/renderThumbnail.js";
import { renderCategoryTitle } from "../createHTMLelements/renderCategoryTitle.js";

const h2 = document.querySelector("h2");
const viewMore = document.querySelector(".view-more");

export async function sortByCategory(baseUrl, url, container) {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const categoryID = params.get("category");

  if (categoryID) {
    const newUrl = url + "&categories=" + categoryID;
    h2.innerHTML = await renderCategoryTitle(baseUrl, categoryID);
    viewMore.style.display = "none";
    return renderThumbnails(newUrl, container);
  } else {
    return renderThumbnails(url, container);
  }
}
