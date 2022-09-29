import { userAlert } from "../utils/userAlert.js";
import { createThumbnail } from "../createHTMLelements/createThumbnail.js";
import { fetchAPI } from "../utils/fetchAPI.js";

const featuredTwo = document.querySelector(".featured-two-container");

export async function getFeaturedItem(url) {
  try {
    const featuredPosts = await fetchAPI(url);
    const html = await createThumbnail(featuredPosts);
    featuredTwo.append(html);
  } catch (e) {
    console.log(e);
    featuredTwo.innerHTML = userAlert("error", "failed to fetch data");
  }
}
