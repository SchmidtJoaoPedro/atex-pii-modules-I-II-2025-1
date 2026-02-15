/**
 * Carrossel de slides - Controle de navegação
 */
const track = document.getElementById('carouselTrack');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

/**
 * Move o slide na direção especificada
 * @param {number} direction - Direção do movimento (-1 para anterior, 1 para próximo)
 */
function moveSlide(direction) {
  currentIndex += direction;

  if (currentIndex < 0) currentIndex = slides.length - 1;
  if (currentIndex >= slides.length) currentIndex = 0;

  const offset = -currentIndex * 100;
  track.style.transform = `translateX(${offset}%)`;
  
  // Atualiza ARIA live region para leitores de tela
  announceSlide();
}

/**
 * Anuncia o slide atual para acessibilidade
 */
function announceSlide() {
  const announcement = `Slide ${currentIndex + 1} de ${slides.length}`;
  console.log(announcement);
}

// Suporte para navegação por teclado
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') {
    moveSlide(-1);
  } else if (event.key === 'ArrowRight') {
    moveSlide(1);
  }
});

// Auto-play opcional (descomente se desejar)
// setInterval(() => moveSlide(1), 5000);