// creating a node list
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

// ! wait for all dom content to load
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
  slides[slideIndex].classList.add("displaySlide");
  intervalId =  setInterval(nextSlide, 5000); // call the next slide after 5s
  console.log(intervalId);
}

function showSlide(index) {}

function prevSlide() {}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}
