// ! 1- the node list of images
const slides = document.querySelectorAll('.slides img');
console.log(slides);

// ! 2- declaring the index to move through the node list
let slideIndex = 0;

// call the function after the dom content fully loaded
document.addEventListener('DOMContentLoaded',
  initializeSlide
)
// ! 3- necessary functions
function initializeSlide() {
  // initilize the 1st img
  slides[slideIndex].classList.add('displaySlide');
}

function showSlide(index) {
  
}

function nextSlide() {
  
}

function prevSlide() {
  
}