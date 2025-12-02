// ! 1- the node list of images
const slides = document.querySelectorAll('.slides img');
console.log(slides);

// ! 2- declaring the index to move through the node list
let slideIndex = 0;

const nextBtn = document.getElementById('nextBtn')
const prevBtn = document.getElementById('prevBtn')

// call the function after the dom content fully loaded
document.addEventListener('DOMContentLoaded',
  initializeSlide
)
// ! 3- necessary functions
function initializeSlide() {
  // initilize the 1st img
  slides[slideIndex].classList.add('displaySlide');
}

// adding event listeners
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);


function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }
  // access the node list & remove the display class
  slides.forEach(
    slide => {
      slide.classList.remove('displaySlide')
    }
  )
  slides[slideIndex].classList.add('displaySlide');
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
  console.log('nxt slide');
}

function prevSlide() {
  console.log('prev slide');
  slideIndex--;
  showSlide(slideIndex);
}