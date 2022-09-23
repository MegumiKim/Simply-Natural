import { carousel } from "./carousel.js";
import { userAlert } from "./userAlert.js";
import { renderThumbnails } from "./createHTMLelements/renderThumbnail.js";
import { createThumbnail } from "./createHTMLelements/createThumbnail.js";
import { fetchAPI } from "./fetchAPI.js";
const featuredOne = document.querySelector(".featured-one-container");
const featuredTwo = document.querySelector(".featured-two-container");
const baseURL = "https://kimuramegumi.site/SimplyNatural/wp-json/wp/v2/posts";
// const hamburgerMenu = document.querySelector(".nav-button");

// hamburgerMenu.onclick = closeNav;
carousel();

// rendering trending topics
const featuredCategoryUrl =
  "https://kimuramegumi.site/SimplyNatural/wp-json/wp/v2/posts?_fields=id,date,title,content,_links,_embedded&_embed=wp:featuredmedia,wp:term&categories=3";

renderThumbnails(featuredCategoryUrl, featuredOne);

// rendering top story
const topStoryUrl =
  "https://kimuramegumi.site/SimplyNatural/wp-json/wp/v2/posts/86?_fields=id,date,title,_links,_embedded&_embed=wp:featuredmedia,wp:term";

async function getFeaturedItem(url) {
  try {
    const featuredPosts = await fetchAPI(url);
    const html = await createThumbnail(featuredPosts);
    featuredTwo.append(html);
  } catch (e) {
    console.log(e);
    featuredTwo.innerHTML = userAlert("error", "failed to fetch data");
  }
}

getFeaturedItem(topStoryUrl);
