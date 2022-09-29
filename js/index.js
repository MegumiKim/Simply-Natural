import { carousel } from "./components/carousel.js";
import { renderThumbnails } from "./createHTMLelements/renderThumbnail.js";
import { getFeaturedItem } from "./components/getFeaturedItem.js";

const featuredOne = document.querySelector(".featured-one-container");
const baseURL = "https://kimuramegumi.site/SimplyNatural/wp-json/wp/v2/posts";
const featuredParam =
  "?_fields=id,date,title,content,_links,_embedded&_embed=wp:featuredmedia,wp:term&categories=3";
const featuredCategoryUrl = baseURL + featuredParam;
const topStoryUrl =
  baseURL +
  "/86?_fields=id,date,title,_links,_embedded&_embed=wp:featuredmedia,wp:term";

carousel();
renderThumbnails(featuredCategoryUrl, featuredOne);
getFeaturedItem(topStoryUrl);
