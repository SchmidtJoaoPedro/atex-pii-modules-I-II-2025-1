const track = document.getElementById('carouselTrack');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function moveSlide(direction) {
  currentIndex += direction;

  if (currentIndex < 0) currentIndex = slides.length - 1;
  if (currentIndex >= slides.length) currentIndex = 0;

  const offset = -currentIndex * 100;
  track.style.transform = `translateX(${offset}%)`;
}