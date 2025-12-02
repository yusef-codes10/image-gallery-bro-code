// ! 1- the node list of images
const slides = document.querySelectorAll('.slides img');
console.log(slides);

// ! 2- declaring the index to move through the node list
let slideIndex = 0;

initializeSlide();
// ! 3- necessary functions
function initializeSlide() {
  // initilize the 1st img
  console.log(
    slides[slideIndex]
  ); 
  slides[slideIndex].classList.remove('img-class');
}

function showSlide(index) {
  
}

function nextSlide() {
  
}

function prevSlide() {
  
}