const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
const cross = document.querySelector(".cross");

hamburger.addEventListener("click", function () {
  sidebar.classList.toggle("sidebar--toggle");
});

sidebar.addEventListener("transitionend", function () {
  hamburger.classList.toggle("hamburger--toggle");
});

cross.addEventListener("click", function () {
  sidebar.classList.remove("sidebar--toggle");
});
