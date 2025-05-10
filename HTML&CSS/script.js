const sliderList = document.getElementById('slider-list');
const prevBtn = document.querySelector('.slider-button.prev');
const nextBtn = document.querySelector('.slider-button.next');
let currentIndex = 0;

function getSlidesPerView() {
  const width = window.innerWidth;
  if (width >= 1024) return 3;
  if (width >= 768) return 2;
  return 1;
}

function updateSlider() {
  const slidesPerView = getSlidesPerView();
  const slideWidth = sliderList.children[0].offsetWidth;
  const gap = 25; // نفس spaceBetween

  const moveX = (slideWidth + gap) * currentIndex;
  sliderList.style.transform = `translateX(-${moveX}px)`;
}

function nextSlide() {
  const slidesPerView = getSlidesPerView();
  const totalSlides = sliderList.children.length;
  currentIndex++;
  if (currentIndex >= totalSlides - slidesPerView + 1) {
    currentIndex = 0; // Reset to start for infinite loop
    sliderList.style.transition = 'none'; // Disable transition for instant reset
    updateSlider();
    // Force reflow to ensure the transition is applied after reset
    sliderList.offsetHeight;
    sliderList.style.transition = 'transform 0.5s ease'; // Re-enable transition
  }
  updateSlider();
}

function prevSlide() {
  const slidesPerView = getSlidesPerView();
  const totalSlides = sliderList.children.length;
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = totalSlides - slidesPerView; // Move to last slide for infinite loop
    sliderList.style.transition = 'none'; // Disable transition for instant reset
    updateSlider();
    // Force reflow to ensure the transition is applied after reset
    sliderList.offsetHeight;
    sliderList.style.transition = 'transform 0.5s ease'; // Re-enable transition
  }
  updateSlider();
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
window.addEventListener('resize', updateSlider);
window.addEventListener('load', updateSlider);