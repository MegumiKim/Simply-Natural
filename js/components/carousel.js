import { createCarouselItem } from "../createHTMLelements/createCarouselItem.js";
import { fetchAPI } from "../utils/fetchAPI.js";

const baseURL = "https://kimuramegumi.site/SimplyNatural/wp-json/wp/v2/posts";
const fieldsParam =
  "?_fields=id,date,title,content,_links,_embedded&_embed=wp:featuredmedia,wp:term";
const carouselUrl = baseURL + fieldsParam + "&per_page=5";
const fetchedPosts = await fetchAPI(carouselUrl);
const container = document.querySelector(".caro_container");
const forward = document.querySelector(".forward");
const backButton = document.querySelector(".back");
const dots = document.querySelectorAll(".dot");
let index = 0;

export async function carousel() {
  try {
    container.innerHTML = "";
    const post = await fetchedPosts[index];
    const html = await createCarouselItem(post);
    container.append(html);
  } catch (e) {
    console.log(e);
  }
}

forward.onclick = showNextSlide;
backButton.onclick = showPreviousSlide;

dots.forEach((dot, i) => {
  dot.onclick = function () {
    dots[index].classList.remove("carousel-dot_selected");
    dots[i].classList.add("carousel-dot_selected");
    index = i;
    carousel();
  };
});

function showNextSlide() {
  const dots = document.querySelectorAll(".dot");
  dots[index].classList.remove("carousel-dot_selected");
  index = (index + 1) % 5;
  dots[index].classList.add("carousel-dot_selected");
  carousel();
}

function showPreviousSlide() {
  const dots = document.querySelectorAll(".dot");
  if (index > 0) {
    dots[index].classList.remove("carousel-dot_selected");
    index = (index - 1) % 5;
    carousel();
    dots[index].classList.add("carousel-dot_selected");
  } else {
    dots[index].classList.remove("carousel-dot_selected");
    index = 4;
    carousel();
    dots[index].classList.add("carousel-dot_selected");
  }
}
