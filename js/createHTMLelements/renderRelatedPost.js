import { renderThumbnails } from "./renderThumbnail.js";
import { fetchAPI } from "../utils/fetchAPI.js";

export async function renderRelatedPosts(url, relatedContainer, excludeID) {
  const post = await fetchAPI(url);
  const categoryID = post._embedded["wp:term"][0][0].id;
  const argument =
    "&_fields=id,date,title,_links,_embedded&_embed=wp:featuredmedia,wp:term";
  const relatedPostUrl =
    "https://kimuramegumi.site/SimplyNatural/wp-json/wp/v2/posts/?per_page=2" +
    argument +
    "&categories=" +
    categoryID +
    `&exclude=${excludeID}`;
  renderThumbnails(relatedPostUrl, relatedContainer);
}
