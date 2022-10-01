import { carousel } from "./components/carousel.js";
import { renderThumbnails } from "./createHTMLelements/renderThumbnail.js";
import { getFeaturedItem } from "./components/getFeaturedItem.js";

const featuredOne = document.querySelector(".featured-one-container");
const baseURL = "https://kimuramegumi.site/SimplyNatural/wp-json/wp/v2/posts";
const fieldsParam =
  "?_fields=id,date,title,content,_links,_embedded&_embed=wp:featuredmedia,wp:term";
const categoryParam = "&categories=3";
const featuredCategoryUrl = baseURL + fieldsParam + categoryParam;
const topStoryUrl = baseURL + "/86" + fieldsParam;

carousel();
renderThumbnails(featuredCategoryUrl, featuredOne);
getFeaturedItem(topStoryUrl);
