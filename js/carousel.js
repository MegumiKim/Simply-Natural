import { fetchPosts } from "./form/API/fetchPosts.js";
import { createCarouselItem } from "./createHTMLelements/createCarouselItem.js";

const container = document.querySelector(".caro_container");
const dots = document.querySelectorAll(".dot");

let currentSlideIndex = 0;

export async function showCarousel() {
  renderCarouselItem();

  const forwardButton = document.querySelector(".forward");
  forwardButton.onclick = moveForward;

  const backButton = document.querySelector(".back");
  backButton.onclick = moveBack;
}

async function renderCarouselItem() {
  container.innerHTML = "";
  const fetchedPosts = await fetchPosts(4);
  const postToDisplay = await fetchedPosts[currentSlideIndex];
  const carouselItem = await createCarouselItem(postToDisplay);
  container.append(carouselItem);
}

async function moveForward() {
  const backButton = document.querySelector(".back");

  backButton.style.display = "block";
  dots[currentSlideIndex].classList.remove("carousel-dot_selected");
  currentSlideIndex = (currentSlideIndex + 1) % 4;
  renderCarouselItem();
  dots[currentSlideIndex].classList.add("carousel-dot_selected");
  console.log(currentSlideIndex);
}

async function moveBack() {
  const backButton = document.querySelector(".back");
  dots[currentSlideIndex].classList.remove("carousel-dot_selected");

  if (currentSlideIndex === 0) {
    backButton.style.display = "none";
  } else {
    currentSlideIndex = Math.abs((currentSlideIndex - 1) % 4);
    renderCarouselItem();
    dots[currentSlideIndex].classList.add("carousel-dot_selected");
    console.log(currentSlideIndex);
  }
}

// const carouselItems = document.querySelectorAll(".carousel-item");
// const dots = document.querySelectorAll(".dot");

// let currentSlideIndex = 0;
// export function moveSlide() {
//   const forwardButton = document.querySelector(".forward");
//   forwardButton.onclick = moveForward;

//   const backButton = document.querySelector(".back");
//   backButton.onclick = moveBack;
// }

// function moveForward() {
//   carouselItems[currentSlideIndex].classList.remove("carousel-item_selected");
//   dots[currentSlideIndex].classList.remove("carousel-dot_selected");
//   currentSlideIndex = (currentSlideIndex + 1) % carouselItems.length;
//   console.log(currentSlideIndex);
//   carouselItems[currentSlideIndex].classList.add("carousel-item_selected");
//   dots[currentSlideIndex].classList.add("carousel-dot_selected");
// }

// function moveBack() {
//   carouselItems[currentSlideIndex].classList.remove("carousel-item_selected");
//   dots[currentSlideIndex].classList.remove("carousel-dot_selected");
//   currentSlideIndex = Math.abs((currentSlideIndex - 1) % carouselItems.length);
//   console.log(Math.abs((currentSlideIndex - 1) % carouselItems.length));
//   carouselItems[currentSlideIndex].classList.add("carousel-item_selected");
//   dots[currentSlideIndex].classList.add("carousel-dot_selected");
// }

// moveSlide();
