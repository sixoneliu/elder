const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const slideWidth = slides[0].clientWidth;
let currentIndex = 0;

// Initialize slide position
updateSlidePosition();

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlidePosition();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlidePosition();
}

function updateSlidePosition() {
  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// 自动播放
let interval = setInterval(nextSlide, 3000);

// 鼠标悬停时停止自动播放
slider.addEventListener("mouseover", () => {
  clearInterval(interval);
});

// 鼠标移出时继续自动播放
slider.addEventListener("mouseout", () => {
  interval = setInterval(nextSlide, 3000);
});
