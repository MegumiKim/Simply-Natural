import { createCarouselItem } from "./createHTMLelements/createCarouselItem.js";
import { fetchPosts } from "./form/API/fetchPosts.js";

const url =
  "https://kimuramegumi.site/SimplyNatural/wp-json/wp/v2/posts?_embed&per_page=5";
const fetchedPosts = await fetchPosts(url);
const container = document.querySelector(".caro_container");
const dots = document.querySelectorAll(".dot");

let index = 0;
export async function carousel() {
  container.innerHTML = "";
  const post = await fetchedPosts[index];
  // console.log(post);
  const html = await createCarouselItem(post);

  container.append(html);
}

const forward = document.querySelector(".forward");
forward.onclick = function () {
  dots[index].classList.remove("carousel-dot_selected");
  backButton.style.display = "block";
  index = (index + 1) % 5;
  dots[index].classList.add("carousel-dot_selected");
  carousel();
};

const backButton = document.querySelector(".back");
backButton.onclick = function () {
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
};
