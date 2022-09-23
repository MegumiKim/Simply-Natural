export function closeNav() {
  const nav = document.querySelector("nav");
  const hamburgerIcon = document.querySelector(".nav-button");
  nav.classList.toggle("show");
  nav.classList.toggle("hide");

  hamburgerIcon.classList.toggle("fa-solid fa-xmark");
  hamburgerIcon.classList.toggle("fas fa-bars");
  console.log("hi");
}
