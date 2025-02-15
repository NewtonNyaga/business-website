let currentSlide = 0;
const slides = [
    "url('image1.jpeg')",
    "url('image2.jpeg')",
    "url('image3.jpeg')",
    "url('image4.jpeg')"
];

const messages = [
    "Welcome to NewTec Solutions Company",
    "Innovative Digital Solutions",
    "Empowering Your Business",
    "Let's Build the Future Together"
];

const heroSection = document.querySelector('.hero');
const heroText = document.querySelector('.hero-text');

// Function to change slide
function changeSlide() {
    heroSection.style.backgroundImage = slides[currentSlide];
    heroText.textContent = messages[currentSlide];
}

// Show the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    changeSlide();
}

// Show the previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    changeSlide();
}

// Auto slideshow
setInterval(nextSlide, 5000); // Change slide every 5 seconds

// Initial call to show the first slide
changeSlide();
const menuToggle = document.querySelector('.menu-toggle');
const menuContent = document.querySelector('.menu-content');

menuToggle.addEventListener('click', () => {
    menuContent.classList.toggle('active');
});

