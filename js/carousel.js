const carouselItems = document.querySelectorAll(".carousel-item");
const dots = document.querySelectorAll(".dot");

let currentSlideIndex = 0;
export function moveSlide() {
  const forwardButton = document.querySelector(".forward");
  forwardButton.onclick = moveForward;

  const backButton = document.querySelector(".back");
  backButton.onclick = moveBack;
}

function moveForward() {
  carouselItems[currentSlideIndex].classList.remove("carousel-item_selected");
  dots[currentSlideIndex].classList.remove("carousel-dot_selected");
  currentSlideIndex = (currentSlideIndex + 1) % carouselItems.length;
  console.log(currentSlideIndex);
  carouselItems[currentSlideIndex].classList.add("carousel-item_selected");
  dots[currentSlideIndex].classList.add("carousel-dot_selected");
}

function moveBack() {
  carouselItems[currentSlideIndex].classList.remove("carousel-item_selected");
  dots[currentSlideIndex].classList.remove("carousel-dot_selected");
  currentSlideIndex = Math.abs((currentSlideIndex - 1) % carouselItems.length);
  console.log(Math.abs((currentSlideIndex - 1) % carouselItems.length));
  carouselItems[currentSlideIndex].classList.add("carousel-item_selected");
  dots[currentSlideIndex].classList.add("carousel-dot_selected");
}

moveSlide();
