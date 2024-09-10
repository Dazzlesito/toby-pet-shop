import './style.css'

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlides);

let prevButton = document.getElementById("prev");
prevButton.addEventListener("click", prevSlide);

let nextButton = document.getElementById("next");
nextButton.addEventListener("click", nextSlide);

function initializeSlides() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 6000);
  }
}

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  }

  if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach(slide => {
    slide.classList.remove("displaySlide")
  });
  slides[slideIndex].classList.add("displaySlide");
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}
