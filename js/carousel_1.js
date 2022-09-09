import { createCarouselItem } from "./createHTMLelements/createCarouselItem.js";
import { fetchPosts } from "./form/API/fetchPosts.js";

const url = "http://localhost:10003/wp-json/wp/v2/posts?=4";
const fetchedPosts = await fetchPosts(url);
const container = document.querySelector(".caro_container");
const dots = document.querySelectorAll(".dot");

let index = 0;
export async function carousel() {
  container.innerHTML = "";
  const post = fetchedPosts[index];
  const html = await createCarouselItem(post);

  container.append(html);
}

const forward = document.querySelector(".forward");
forward.onclick = function () {
  dots[index].classList.remove("carousel-dot_selected");
  backButton.style.display = "block";
  index = (index + 1) % 4;
  dots[index].classList.add("carousel-dot_selected");
  carousel();
};

const backButton = document.querySelector(".back");
backButton.onclick = function () {
  if (index === 0) {
    backButton.style.display = "none";
  } else {
    dots[index].classList.remove("carousel-dot_selected");
    index = Math.abs((index - 1) % 4);
    carousel();
    dots[index].classList.add("carousel-dot_selected");
  }
};
