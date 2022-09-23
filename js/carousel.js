import { createCarouselItem } from "./createHTMLelements/createCarouselItem.js";
import { fetchAPI } from "./fetchAPI.js";
import { userAlert } from "./userAlert.js";

const url =
  "https://kimuramegumi.site/SimplyNatural/wp-json/wp/v2/posts?_embed&per_page=5";
const fetchedPosts = await fetchAPI(url);
const container = document.querySelector(".caro_container");
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
    container.innerHTML = userAlert(
      "error",
      "an error occurred while fetching data"
    );
  }
}

const forward = document.querySelector(".forward");
const backButton = document.querySelector(".back");

export function showNextSlide() {
  dots[index].classList.remove("carousel-dot_selected");
  index = (index + 1) % 5;
  dots[index].classList.add("carousel-dot_selected");
  carousel();
}

export function showPreviousSlide() {
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
